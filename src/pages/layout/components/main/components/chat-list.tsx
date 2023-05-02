import Icon from "@/components/icon";
import Image from "next/image";

export default function ChatList(props: { handleClickUser: Function }) {
  const { handleClickUser } = props;

  const chatData = [
    {
      name: "啊哈哈",
      avatar:
        "https://volit.oss-cn-guangzhou.aliyuncs.com/image/wallhaven-6d5wjx_1280x1920.png",
      lasted_chat: "你好",
    },
    {
      name: "qwe123",
      avatar:
        "https://volit.oss-cn-guangzhou.aliyuncs.com/image/wallhaven-o5129p_1280x1920.png",
      lasted_chat: "你好",
    },
    {
      name: "小虎",
      avatar:
        "https://volit.oss-cn-guangzhou.aliyuncs.com/image/wallhaven-ex9woo_1280x1920.png",
      lasted_chat: "你好",
    },
    {
      name: "王哈哈",
      avatar:
        "https://volit.oss-cn-guangzhou.aliyuncs.com/image/wallhaven-6d5ejx_1920x1080.png",
      lasted_chat: "你好",
    },
    {
      name: "卢绍平",
      avatar:
        "https://volit.oss-cn-guangzhou.aliyuncs.com/image/wallhaven-85krxo_1280x1920.png",
      lasted_chat: "你好",
    },
  ];

  const chatList = chatData.map((item) => (
    <div
      className="flex justify-center items-center gap-2 py-2 px-4 hover:bg-gray-100 cursor-pointer"
      key={item.name}
      onClick={() => handleClickUser(item)}
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
  ));

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
      <div>{chatList}</div>
    </div>
  );
}
