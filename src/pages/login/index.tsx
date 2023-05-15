import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login, getUserInfo } from "@/request/api";
import { connect } from "react-redux";
import { setUser } from "@/store/actions/user";
import { send } from "@/utils/socket";
import { User } from "@/constants/user";
import md5 from "js-md5";

function Login(props: any) {
  const { setUser, user, isLogin } = props;
  const router = useRouter();

  const [loginForm, updateLoginForm] = useState({ phone: "", password: "" });

  const onFinish = (values: any) => {
    const temp = { ...values };
    temp.password = md5(temp.password);
    login(temp).then((res) => {
      window.localStorage.setItem("userToken", res.data.token);
      getUserInfo().then((res) => {
        setUser(res.data);
        send("login", {
          account: res.data.phone,
        });
        window.localStorage.setItem("user", JSON.stringify(res.data));
        window.localStorage.setItem("isLogin", "1");
        router.push("/layout");
      });
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Form
        name="normal_login"
        className="login-form w-1/4"
        labelCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item
          name="phone"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={loginForm.phone}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={loginForm.password}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            登录
          </Button>
          <p className="my-2">
            <a className="text-base" onClick={() => router.push("/register")}>
              注册账号
            </a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = ({ user }: any) => {
  return { user: user.userInfo, isLogin: user.isLogin };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setUser(user: User) {
      dispatch(setUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
