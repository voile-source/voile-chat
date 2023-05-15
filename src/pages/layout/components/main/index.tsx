import { Dispatch, useState, SetStateAction } from "react";
import { User } from "./constants";
import dynamic from "next/dynamic";

const OptionSide = dynamic(import("./components/option-side"), { ssr: false });
const Chat = dynamic(import("./components/chat"), { ssr: false });
const ChatList = dynamic(import("./components/chat-list"), { ssr: false });

export default function Main() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full px-4 py-4">
        <div
          className="flex w-full h-full rounded-lg"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          {/* 选项 */}
          <OptionSide />
          {/* 列表 */}
          <div>
            <ChatList></ChatList>
          </div>
          {/* 聊天页 */}
          <div className="flex-1">
            <Chat></Chat>
          </div>
        </div>
      </div>
    </>
  );
}
