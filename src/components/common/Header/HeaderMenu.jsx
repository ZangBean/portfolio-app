import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledHeader, Logo, LoginButton } from "./Header.styled.js";
import AddUserModal from "../Modal/AddUserModal.jsx";

export default function HeaderMenu() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <StyledHeader>
        <Logo>
          <Link to="/">Portfolio App</Link>
        </Logo>
        <LoginButton type="primary" onClick={() => setIsModalVisible(true)}>
          Thêm User
        </LoginButton>
        <LoginButton type="primary">
          <Link to="/login">Login</Link>
        </LoginButton>
      </StyledHeader>
      <AddUserModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
}
