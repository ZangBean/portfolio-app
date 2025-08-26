import { Link } from "react-router-dom";
import {
  StyledHeader,
  Logo,
  CenterMenu,
  LoginButton,
} from "./Header.styled.js";

export default function AppHeader() {
  const items = [
    { key: "home", label: <Link to="/">About Me</Link> },
    { key: "projects", label: <Link to="/projects">Projects</Link> },
    { key: "skills", label: <Link to="/skills">Skills</Link> },
    { key: "experience", label: <Link to="/experience">Experience</Link> },
    { key: "contact", label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <StyledHeader>
      <Logo>
        <Link to="/">Portfolio App</Link>
      </Logo>

      <CenterMenu theme="dark" mode="horizontal" items={items} />

      <LoginButton type="primary">
        <Link to="/login">Login</Link>
      </LoginButton>
    </StyledHeader>
  );
}
