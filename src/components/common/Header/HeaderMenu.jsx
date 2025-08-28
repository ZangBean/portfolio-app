import { Link, useNavigate } from "react-router-dom";
import { StyledHeader, Logo, LoginButton } from "./Header.styled.js";
import { logoutUserAction } from "../../../stores/screens/login/login.action.js";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../stores/screens/rootSelector.js";

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
        <Logo>
          <Link to="/">Portfolio App</Link>
        </Logo>

        {user ? (
          <LoginButton type="primary" onClick={handleLogout}>
            Logout
          </LoginButton>
        ) : (
          <LoginButton type="primary">
            <Link to="/login">Login</Link>
          </LoginButton>
        )}
      </StyledHeader>
    </>
  );
}
