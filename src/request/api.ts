import service from ".";

export const register = (info: any) => service.post("/user/register", info);

export const login = (info: any) => service.post("/user/login", info);

export const getUserInfo = () => service.get("/user/userInfo");

export const logout = () => service.get("/user/logout");

export const getUserList = () => service.get("/user/userList");
