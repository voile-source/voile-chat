import { User } from "@/constants/user";

export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export function login(user: User) {
  return {
    type: actionTypes.LOGIN,
    payload: user,
  };
}
