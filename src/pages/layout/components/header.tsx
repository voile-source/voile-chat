import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-6  w-full h-16 shadow">
        <h1 className="text-lg font-bold">voile聊天室</h1>
        <div className="px-16 ">
          {isLogin ? (
            <Image
              alt="头像"
              width="40"
              height="40"
              className="rounded-full object-cover w-12 h-12 cursor-pointer"
              src="https://volit.oss-cn-guangzhou.aliyuncs.com/image/wallhaven-zyq5xy_1280x1920.png"
            />
          ) : (
            <button className="rounded bg-blue-500 px-6 py-1 text-white text-lg hover:bg-blue-400 transition-colors active:bg-blue-300">
              登录
            </button>
          )}
        </div>
      </div>
    </>
  );
}
