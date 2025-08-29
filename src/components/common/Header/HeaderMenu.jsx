import { useNavigate } from "react-router-dom";
import { StyledHeader, LogoImage, LoginButton } from "./Header.styled.js";
import { logoutUserAction } from "../../../stores/screens/login/login.action.js";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../stores/screens/rootSelector.js";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../../../assets/logo/logoPortfolio.png";

export default function HeaderMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUserAction()).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <StyledHeader>
        <LogoImage src={logo} alt="Logo" onClick={() => navigate("/")} />
        {user ? (
          <LoginButton type="primary" onClick={handleLogout}>
            <AiOutlineLogout title="Logout" />
          </LoginButton>
        ) : (
          <LoginButton type="primary" onClick={() => navigate("/login")}>
            Login
          </LoginButton>
        )}
      </StyledHeader>
    </>
  );
}
