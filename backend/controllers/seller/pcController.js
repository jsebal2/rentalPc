const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const createPc = async (req, res) => {
  const { pcName, price, cpu, ram, ssd, memo, user_id, location } = req.body;

  try {
    const newPc = await prisma.pc.create({
        data : {
            pcName,
            price : Number(price),
            location,
            cpu: cpu ? cpu.replace(/\s+/g, '').toUpperCase() : null,
            ram,
            ssd,
            memo,
            user_id,
            // vpnUsage,
            // ipAssigned,
            // wolEnabled,
        },
    });
    res.status(201).json(newPc);
  } catch (error) {
    console.error('PC 등록 오류:', error);
    res.status(500).json({ message : 'PC 등록 오류' });
  }
};

const bulkPcRegister = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user_id = decoded.userId;

    const rows = req.body.rows;
    if (!rows || !Array.isArray(rows)) {
      return res.status(400).json({ message: '유효하지 않은 데이터 형식입니다.' });
    }

    const isNumeric = (value) => /^\d+(,\d{3})*$/.test(value) || /^\d+$/.test(value);
    const invalidRows = [];

    const data = rows.map((row, index) => {
      const errors = [];

      if (!row.pcName || !row.location || !row.price) {
        errors.push('필수 항목 누락');
      }

      if (row.price && !isNumeric(row.price)) {
        errors.push('임대료가 숫자 형식이 아님');
      }

      if (errors.length > 0) {
        invalidRows.push({ index: index + 1, pcId: row.pcId, errors });
      }

      return {
        pcName: row.pcName,
        price: parseInt(String(row.price).replace(/,/g, '')) || 0,
        location: row.location,
        manufacturer: row.manufacturer,
        cpu: row.cpu?.replace(/\s+/g, '').toUpperCase() || '',
        ram: row.ram || '',
        ssd: row.ssd || '',
        memo: row.memo || '',
        user_id,
      };
    });

    if (invalidRows.length > 0) {
      return res.status(400).json({
        message: '유효성 검사 실패',
        errors: invalidRows,
      });
    }

    const created = await prisma.pc.createMany({
      data,
      skipDuplicates: true,
    });

    res.status(200).json(created);
  } catch (err) {
    console.error('PC 등록 오류:', err);
    res.status(500).json({ message: 'PC 등록 중 오류 발생' });
  }
};


const getPcList = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const user_id = decoded.userId;
  const keyword = req.query.keyword?.toLowerCase();

  if (!token) {
    return res.status(401).json({ message : '토큰이 없습니다.' });
  }

  try {
    const pcs = await prisma.pc.findMany({
      where : {
        user_id : user_id,
        OR: keyword ? [
          { pcName: { contains: keyword } },
          { location: { contains: keyword } },
          { cpu: { contains: keyword } },
          { ram: { contains: keyword } },
          { ssd: { contains: keyword } },
          { renter: { name: { contains: keyword } } }
        ] : undefined
      },
      select : {
        pc_id : true,
        pcName : true,
        state : true,
        price : true,
        cpu : true,
        ram : true,
        ssd : true,
        memo: true,
        location : true,
        reg_date: true,
        rental_status : true,
        renter_id : true,
        renter : {
          select : {
            name : true,
            email : true,
          }
        },
        rental: {
          select: {
            start_date: true,
            end_date: true,
            user_id: true,
            user: {
              select: {
                name: true,
                email: true,
              }
            }
          }
        },
        rental_extensions: {
        select: {
          extension_id: true,
          requested_end: true,
          status: true,
          requested_at: true,
        },
        orderBy: {
          requested_at: 'desc'
        },
        take: 1 // 최신 연장 요청 하나만
      }
      },
    });
    const numberedPcs = pcs.map((pc, index) => (
      {
        no : index + 1,
        pc_id : pc.pc_id,
        ...pc,
      }
    ))
    
    // console.log(numberedPcs);
    // console.log(numberedPcs[0].rental);
    res.status(200).json(numberedPcs);
  } catch (error) {
    console.error('PC 목록 조회 오류:', error);
    res.status(500).json({ message : 'PC 목록 조회 오류' });
  }
}

const updatePc = async (req, res) => {
  const pcId = parseInt(req.params.pc_id, 10);
  let { pcName, price, ram, ssd, location, cpu } = req.body;

  const parsedPrice = parseInt(price, 10);

  if (cpu) cpu = cpu.replace(/\s+/g, '').toUpperCase();

  try {
    const updated = await prisma.pc.update({
      where: { pc_id : pcId },
      data: {
        pcName,
        price : parsedPrice,
        location,
        cpu,
        ram,
        ssd
      },
    });

    res.status(200).json(updated);
  } catch (err) {
    console.error('PC 수정 오류:', err);
    res.status(500).json({ message: 'PC 수정 중 오류 발생' });
  }
};

const deletePc = async (req, res) => {
  const pcId = parseInt(req.params.pc_id, 10);

  try {
    await prisma.pc.delete({
      where: { pc_id : pcId },
    });
    res.status(200).json({ message: 'PC 삭제 완료' });
  } catch (error) {
    console.error('PC 삭제 오류:', error);
    res.status(500).json({ message: 'PC 삭제 중 오류 발생' });
  }
};


// const findUser = async (req, res) => {
//   const keyword = req.query.keyword?.toLowerCase(); // ✅ 수정

//   try {
//     const user = await prisma.user.findFirst({
//       where : { 
//         OR : [
//           { email : { contains : keyword, mode : 'insensitive' } },
//           { name : { contains : keyword, mode : 'insensitive' } },
//         ]
//        },
//     });

//     if (!user) {
//       return res.status(404).json({ message : '존재하지 않는 사용자입니다.' });
//     }

//     const rental = await prisma.rental.create({
//       data: {
//         pc_id: Number(pc_id),
//         user_id: user.user_id,
//         start_date: new Date(start_date),
//         end_date: new Date(end_date),
//       },
//     });

//     await prisma.pc.update({
//       where : { pc_id : pc_id },
//       data : {
//         state : 'IN_USE',
//         renter_id : user.user_id,
//         rental_status : 'RENTED',
//       }
//     })

//     res.status(201).json({ message: '대여 등록 성공', rental });
//   } catch (error) {
//     console.error('대여 등록 오류:', error);
//     res.status(500).json({ message: '대여 등록 오류', error });
//   }
// };

const findUser = async (req, res) => {
  const keyword = req.query.keyword?.toLowerCase();
  // console.log(keyword);

  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: { contains: keyword } },
          { name: { contains: keyword } },
        ],
      },
      select: {
        user_id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: '존재하지 않는 사용자입니다.' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('사용자 검색 오류:', error);
    res.status(500).json({ message: '사용자 검색 중 오류 발생' });
  }
};

const rentPc = async (req, res) => {
  const { pc_id, user_id, start_date, end_date } = req.body;

  try {
    // 1. 기존 ACTIVE 상태의 rental이 있다면 ENDED로 변경
    await prisma.rental.updateMany({
      where: {
        pc_id: Number(pc_id),
        status: 'ACTIVE',
      },
      data: {
        status: 'ENDED',
      },
    });

    // 2. 새로운 rental 생성
    const rental = await prisma.rental.create({
      data: {
        pc_id: Number(pc_id),
        user_id: Number(user_id),
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        status: 'ACTIVE', // 새로 생성된 rental은 ACTIVE로 설정
      },
    });

    // 3. 해당 PC 상태도 갱신
    await prisma.pc.update({
      where: { pc_id: Number(pc_id) },
      data: {
        state: 'IN_USE',
        renter_id: Number(user_id),
        rental_status: 'RENTED',
      },
    });

    res.status(201).json({ message: '대여 등록 성공', rental });
  } catch (error) {
    console.error('대여 등록 오류:', error);
    res.status(500).json({ message: '대여 등록 오류', error });
  }
};

const approveExtension = async (req, res) => {
  const { pc_id } = req.body;
  console.log(pc_id);
  

  if (!pc_id) return res.status(400).json({ message: 'pc_id가 없습니다.' });

  try {
    const latest = await prisma.rental_extension.findFirst({
      where: {
        pc_id,
        status: 'PENDING',
      },
      orderBy: {
        requested_at: 'desc',
      },
    });

    if (!latest) {
      return res.status(404).json({ message: '승인할 연장 요청이 없습니다.' });
    }

    const updated = await prisma.rental_extension.update({
      where: {
        extension_id: latest.extension_id,
      },
      data: {
        status: 'APPROVED',
        processed_at: new Date(),
      },
    });

    res.json({ message: '승인 완료', data: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};






module.exports = { createPc, getPcList, updatePc, deletePc, findUser, rentPc, bulkPcRegister, approveExtension };
