import { Link } from "react-router-dom";
import { StyledHeader, Logo, LoginButton } from "./Header.styled.js";

export default function HeaderMenu() {
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">Portfolio App</Link>
      </Logo>
      <LoginButton type="primary">
        <Link to="/login">Login</Link>
      </LoginButton>
    </StyledHeader>
  );
}
