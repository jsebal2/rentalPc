const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const createPc = async (req, res) => {
  const { pcName, price, cpu, ram, graphic, memo, user_id } = req.body;

  try {
    const newPc = await prisma.pc.create({
        data : {
            pcName,
            price : Number(price),
            cpu,
            ram,
            graphic,
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

const getPcList = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const user_id = decoded.userId;

  if (!token) {
    return res.status(401).json({ message : '토큰이 없습니다.' });
  }

  try {
    const pcs = await prisma.pc.findMany({
      where : {
        user_id : user_id,
      },
      select : {
        pc_id : true,
        pcName : true,
        state : true,
        price : true,
        cpu : true,
        ram : true,
        graphic : true,
        rental_status : true,
        renter_id : true,
        renter : {
          select : {
            name : true,
          }
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
    
    console.log(numberedPcs);
    res.status(200).json(numberedPcs);
  } catch (error) {
    console.error('PC 목록 조회 오류:', error);
    res.status(500).json({ message : 'PC 목록 조회 오류' });
  }
}

const updatePc = async (req, res) => {
  const pcId = parseInt(req.params.pc_id, 10);
  let { pcName, price, cpu, ram, graphic } = req.body;

  price = parseInt(price, 10);

  try {
    const updated = await prisma.pc.update({
      where: { pc_id : pcId },
      data: {
        pcName,
        price,
        cpu,
        ram,
        graphic
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
  console.log(keyword);

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
    const rental = await prisma.rental.create({
      data: {
        pc_id: Number(pc_id),
        user_id: Number(user_id),
        start_date: new Date(start_date),
        end_date: new Date(end_date),
      },
    });

    await prisma.pc.update({
      where: { pc_id },
      data: {
        state: 'IN_USE',
        renter_id: user_id,
        rental_status: 'RENTED',
      },
    });

    res.status(201).json({ message: '대여 등록 성공', rental });
  } catch (error) {
    console.error('대여 등록 오류:', error);
    res.status(500).json({ message: '대여 등록 오류', error });
  }
};





module.exports = { createPc, getPcList, updatePc, deletePc, findUser, rentPc };
