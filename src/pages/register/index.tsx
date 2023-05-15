import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { register } from "@/request/api";
import md5 from "js-md5";

export default function Login() {
  const router = useRouter();

  const [loginForm, updateLoginForm] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const onFinish = (values: any) => {
    const temp = { ...values };
    temp.password = md5(temp.password);
    register(temp).then((res) => {
      message.success(res.data.msg);
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
          name="name"
          rules={[{ required: true, message: "Please input your Phone!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
            value={loginForm.name}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[{ required: true, message: "Please input your Phone!" }]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Phone"
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
            注册
          </Button>
          <p className="my-2 text-base">
            已有账号？<a onClick={() => router.push("login")}>立即登录</a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
}
