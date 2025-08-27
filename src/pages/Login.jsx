import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../stores/screens/login/login.action";
import {
  selectLoading,
  selectError,
  selectUser,
} from "../stores/screens/rootSelector";
import { Form, Input, Button, Alert } from "antd";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const LoginForm = styled(Form)`
  width: 400px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #1f1f1f;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSubmit = () => {
    dispatch(login({ username, password }));
  };

  return (
    <LoginWrapper>
      <LoginForm onFinish={handleSubmit} layout="vertical">
        <Title>Đăng nhập</Title>
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên đăng nhập"
          />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </Form.Item>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
