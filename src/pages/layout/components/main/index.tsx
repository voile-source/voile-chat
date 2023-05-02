import { Dispatch, useState, SetStateAction } from "react";
import OptionSide from "./components/option-side";
import ChatList from "./components/chat-list";
import Chat from "./components/chat";
import { User } from "./constants";

export default function Main() {
  const [user, setUser] = useState<User | null>(null);

  const handleClickUser = (user: User) => {
    console.log(user);
    setUser(user);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-full px-4 py-4">
        <div
          className="flex w-full h-full rounded-lg"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          {/* 选项 */}
          <OptionSide />
          {/* 列表 */}
          <div>
            <ChatList handleClickUser={handleClickUser}></ChatList>
          </div>
          {/* 聊天页 */}
          <div className="flex-1">
            <Chat user={user}></Chat>
          </div>
        </div>
      </div>
    </>
  );
}
