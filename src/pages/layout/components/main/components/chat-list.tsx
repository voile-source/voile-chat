import Icon from "@/components/icon";
import Image from "next/image";
import { getUserList } from "@/request/api";
import { Dispatch, useEffect, useState } from "react";
import { User, UserList } from "@/constants/user";
import { connect } from "react-redux";
import { openChat } from "@/store/actions/user";

function ChatList(props: any) {
  const { user, openChat } = props;

  const [current, setCurrent] = useState("0");
  const [userList, setUserList]: [Array<any>, Function] = useState([]);

  const init = async () => {
    const res = await getUserList();

    setCurrent(res.data[0].phone);

    const handleClinkUser = (user: UserList) => {
      setCurrent(user.phone);
      openChat(user);
    };

    const list = res.data.map((item: UserList) => {
      if (item.phone !== user.phone) {
        return (
          <div
            className={`flex justify-center items-center gap-2 py-2 px-4 hover:bg-gray-100 cursor-pointer ${
              current === item.phone ? "bg-gray-100" : ""
            }`}
            key={item.name}
            onClick={() => handleClinkUser(item)}
          >
            <Image
              alt="头像"
              width="20"
              height="20"
              className="rounded object-cover w-9 h-9 cursor-pointer"
              src={item.avatar}
            ></Image>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between w-full">
                <span className="text-base ">{item.name}</span>
                <div>19:11</div>
              </div>
              <span className="text-sm text-gray-400">{item.lasted_chat}</span>
            </div>
          </div>
        );
      }
    });

    setUserList(list);
    openChat(res.data[0]);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div
      className="flex flex-col w-80 h-full"
      style={{
        borderRight: "1px solid rgba(5, 5, 5, 0.06)",
      }}
    >
      {/* 搜索框 */}
      <div
        className="flex justify-center items-center px-4 py-3 h-16"
        style={{
          borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        <div
          className="flex items-center px-2 rounded w-80"
          style={{
            border: "1px solid rgba(5, 5, 5, 0.1)",
          }}
        >
          <Icon name="sousuo" size="20" color="#9ca3b7"></Icon>
          <input
            className="px-2 py-1 outline-none w-3/4"
            type="text"
            placeholder="请输入搜索内容"
          />
        </div>
      </div>
      {/* 聊天列表 */}
      <div>{userList}</div>
    </div>
  );
}

const mapStateToProps = ({ user }: any) => {
  return {
    user: user.userInfo,
    currentChat: user.currentChat,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    openChat: (user: UserList) => {
      dispatch(openChat(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
