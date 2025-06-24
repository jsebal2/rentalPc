const { Server } = require('socket.io');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function initSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  io.on('connection', (socket) => {

    socket.on('join', (userId) => {
      socket.join(String(userId));
    });

    socket.on('send_message', async ({ senderId, receiverId, text }) => {
      try {
        // 1. 메시지 DB에 저장
        const message = await prisma.message.create({
          data: { senderId, receiverId, text },
        });

        // 2. 메시지 실시간 전송 (받는 사람과 보내는 사람에게)
        io.to(String(receiverId)).emit('receive_message', message);
        io.to(String(senderId)).emit('receive_message', message);
      } catch (err) {
        console.error('메시지 저장/전송 실패:', err);
      }
    });
  });
}

module.exports = initSocket;