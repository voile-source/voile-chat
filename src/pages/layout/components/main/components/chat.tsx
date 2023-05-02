import { User } from "../constants";

export default function Chat(props: { user: User | null }) {
  const { user } = props;
  return (
    <div
      className="flex flex-col h-full"
      style={{
        borderRight: "1px solid rgba(5, 5, 5, 0.06)",
      }}
    >
      {/* 搜索框 */}
      <div
        className="flex justify-left items-center px-4 py-3 h-16"
        style={{
          borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        <p className="text-lg">{user?.name}</p>
      </div>
    </div>
  );
}
