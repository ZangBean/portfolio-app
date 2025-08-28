import HeaderUser from "../../components/common/Header/HeaderUser";
import { Wrapper } from "./UserDetail.styled";

export function UserDetail({ children }) {
  return (
    <Wrapper>
      <HeaderUser />
      {children}
    </Wrapper>
  );
}
