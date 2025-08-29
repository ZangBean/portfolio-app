import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../stores/screens/login/login.action";
import {
  selectLoading,
  selectError,
  selectUser,
} from "../stores/screens/rootSelector";
import { Form, Input, Button, Alert, message } from "antd";
import LoginWrapper from "../components/common/UI/LoginWrapper";
import LoginForm from "../components/common/UI/LoginForm";
import { TitleH2 } from "../components/common/UI/Title";

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user && user.id) {
      navigate(`/about/${user.id}`);
    } else if (user) {
      navigate("/about/1");
    }
  }, [user, navigate]);

  const handleSubmit = async (values) => {
    try {
      const result = await dispatch(loginUserAction(values)).unwrap();
      if (result) {
        message.success("Login successful!");
      }
    } catch (error) {
      message.error(error || "Login failed!");
    }
  };

  return (
    <LoginWrapper>
      <LoginForm form={form} onFinish={handleSubmit} layout="vertical">
        <TitleH2>Login</TitleH2>
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form.Item>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
