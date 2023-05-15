import { useState, useEffect } from "react";
import { User, ChatList } from "../constants";
import Icon from "@/components/icon";
import Message from "./message";
import { getCurrentSocket, send } from "@/utils/socket";
import { connect } from "react-redux";
import { store } from "@/store";
import { openChat } from "@/store/actions/user";
import { UserList } from "@/constants/user";

interface Message {
  sender: User;
  receiver: string;
  content: string;
  type: string;
}

function Chat(props: any) {
  const { currentChat, user, openChat } = props;
  const [chatList, setChatList]: [Array<Message>, Function] = useState([]);
  const [chatContent, setChatContet] = useState("");

  const sendMessage = () => {
    const temp = [...chatList];
    const chatMessage = {
      sender: {
        account: user.phone,
        name: user.name,
        avatar: user.avatar,
      },
      receiver: currentChat!.phone,
      content: chatContent,
      type: "text",
    };
    temp.push(chatMessage);
    setChatList(temp);
    setChatContet("");
    send("msg", chatMessage);
  };

  return (
    <div
      className="flex flex-col h-full rounded-r-md"
      style={{
        backgroundColor: "#f2f3f5",
      }}
    >
      {/* 状态框 */}
      <div
        className="flex justify-left items-center px-4 py-3 h-16 "
        style={{
          borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        <p className="text-lg">{currentChat?.name}</p>
      </div>
      {/* 聊天框 */}
      <div className="flex-1 flex flex-col gap-2">
        {chatList.map((item) => {
          return (
            <Message
              key={item.content}
              sender={item.sender}
              content={item.content}
            ></Message>
          );
        })}
      </div>
      {/* 输入框 */}
      <div
        className="relative h-1/3"
        style={{
          borderTop: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        {/* 工具框 */}
        <div className="flex gap-4 p-2">
          {["biaoqing", "tupian", "wenjian", "dianhua", "shipin"].map(
            (item) => {
              return (
                <span className="cursor-pointer" key={item}>
                  <Icon name={item} size={24} />
                </span>
              );
            }
          )}
        </div>
        <textarea
          placeholder="请输入"
          rows={8}
          className="outline-none w-full p-2 resize-none"
          style={{ backgroundColor: "inherit" }}
          value={chatContent}
          onChange={(value) => {
            setChatContet(value.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              console.log("发送消息");
              sendMessage();
            }
          }}
        ></textarea>
        <button
          className="absolute bottom-4 right-4 bg-blue-500 rounded-md px-2 py-1 text-white"
          onClick={() => sendMessage()}
        >
          发送
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user }: any) => {
  return {
    user: user.userInfo,
    currentChat: user.currentChat,
  };
};

const mapDispatchToProps = () => {
  return {
    openChat: (user: UserList) => {
      openChat(user);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
