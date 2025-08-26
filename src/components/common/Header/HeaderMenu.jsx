import { Link } from "react-router-dom";
import { StyledHeader, Logo, LoginButton } from "./Header.styled.js";
import { Input } from "antd";

export default function HeaderMenu() {
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">Portfolio App</Link>
      </Logo>
      <Input placeholder="Search..." style={{ width: 200 }} />
      <LoginButton type="primary">
        <Link to="/login">Login</Link>
      </LoginButton>
    </StyledHeader>
  );
}
