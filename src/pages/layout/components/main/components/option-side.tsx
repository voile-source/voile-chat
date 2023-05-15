import { useState, useEffect } from "react";
import Icon from "@/components/icon";
import Image from "next/image";
import { User } from "../constants";

function OptionItem({
  name,
  currentOption,
}: {
  name: string;
  currentOption: string;
}) {
  return currentOption === name ? (
    <Icon name={name + "1"} size="24"></Icon>
  ) : (
    <Icon name={name} size="24"></Icon>
  );
}

export default function OptionSide() {
  const [currentOption, setCurrentOption] = useState("chat");
  let user: User = JSON.parse(window.localStorage.getItem("user")!);

  const handleClickOption = (option: string) => {
    setCurrentOption(option);
  };

  const option = [{ name: "chat" }, { name: "personal" }, { name: "home" }];

  const optionList = option.map((item) => {
    return (
      <span
        className="cursor-pointer mx-5 my-4"
        onClick={() => {
          handleClickOption(item.name);
        }}
        key={item.name}
      >
        <OptionItem name={item.name} currentOption={currentOption}></OptionItem>
      </span>
    );
  });

  return (
    <>
      <div
        className="flex flex-col py-4 h-full box-border"
        style={{
          borderRight: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        <span className="cursor-pointer mx-4 my-4">
          <Image
            alt="头像"
            width="20"
            height="20"
            className="rounded object-cover w-8 h-8 cursor-pointer"
            src={user.avatar}
          ></Image>
        </span>
        {optionList}
      </div>
    </>
  );
}
