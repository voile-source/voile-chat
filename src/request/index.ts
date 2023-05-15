import axios, { AxiosResponse } from "axios";
import Qs from "qs";
import { message } from "antd";

const isPrd = process.env.NODE_ENV == "production";
export const basciUrl = isPrd
  ? "https://www.production.com"
  : "http://localhost:8080";

const service = axios.create({ baseURL: basciUrl });

service.interceptors.request.use(
  (config) => {
    const token =
      window.localStorage.getItem("userToken") ||
      window.sessionStorage.getItem("userToken");

    config.headers.set("Authorization", "Bearer " + token);

    config.headers.set(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=utf-8"
    );

    config.data = Qs.stringify(config.data);
    return config;
  },
  (error) => error
);

interface Result {
  code: number;
  msg: string;
  data: any;
}

// const [messageApi, contextHolder] = message.useMessage();
service.interceptors.response.use((res: AxiosResponse<any, Result>) => {
  if (res.data.code) {
    switch (res.data.code) {
      case 200:
        return res.data;
      case 401:
        //未登录处理方法
        break;
      case 403:
        //token过期处理方法
        break;
      default:
        message.error(res.data.msg);
    }
  }
  return res;
});

export default service;
