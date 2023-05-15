import io, { Socket } from "socket.io-client";
// 保存当前Socket
let socket: Socket | null = null;

const BASE_URL = "http://127.0.0.1:9892";

export function getCurrentSocket() {
  if (!socket) createSocket();
  return socket;
}

// 根据两个id来创建一个socket
export function createSocket() {
  if (socket) {
    console.log({
      msg: "当前已经存在socket了",
    });
    return;
  }
  const client = io(BASE_URL).connect();
  socket = client;
  socket.on("msg", (data) => {
    console.log(data);
  });
}

export function destroySocket() {
  if (!socket) {
    console.log("socket已经被销毁");
    return;
  }

  // 刷新页面的时候会自动销毁
  socket.close();
  socket = null;
}

export function send(type: string, msg: any) {
  socket?.emit(type, msg);
}
