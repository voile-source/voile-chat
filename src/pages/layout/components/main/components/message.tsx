import Image from "next/image";
import { useEffect } from "react";
import { User } from "../constants";

export default function Message({
  sender,
  content,
}: {
  sender: User;
  content: any;
  // sendTime: Date;
}) {
  return (
    <div className="flex">
      <div className="flex justify-center items-center gap-2 py-2 px-4">
        <Image
          alt="头像"
          width="20"
          height="20"
          className="rounded object-cover w-9 h-9"
          src={sender.avatar}
        ></Image>
        <div className="flex-1 flex flex-col px-2 py-2 rounded-md cursor-default bg-white">
          {content}
        </div>
      </div>
    </div>
  );
}
