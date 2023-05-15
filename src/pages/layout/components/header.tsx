import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-6  w-full h-16 shadow">
        <h1 className="text-lg font-bold">voile聊天室</h1>
      </div>
    </>
  );
}
