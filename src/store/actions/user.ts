import { User, UserList } from "@/constants/user";
import { use } from "react";

export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  OPEN_CHAT: "OPEN_CHAT",
};

export function setUser(user: User) {
  return {
    type: actionTypes.LOGIN,
    payload: user,
  };
}

export function openChat(user: UserList) {
  return {
    type: actionTypes.OPEN_CHAT,
    payload: user,
  };
}
