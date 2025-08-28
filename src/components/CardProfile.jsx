import { Card, Col, Typography, Tag, Button } from "antd";
import {
  MailOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserAction } from "../stores/screens/user/user.action";
import { logoutUserAction } from "../stores/screens/login/login.action";
import { selectUser } from "../stores/screens/rootSelector";
import ProfileCardStyled from "./common/UI/ProfileCardStyled";
import IconWrapper from "./common/UI/IconWrapper";
import StyledTitle from "./common/UI/StyledTitle";
import { ButtonDelete, ButtonBack } from "./common/UI/Button";

const CardProfile = ({ personal_info, selectedUser }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleDelete = async () => {
    if (selectedUser?.id !== id) return;

    const isConfirmed = window.confirm(
      "Bạn có chắc chắn muốn xoá user này không?"
    );
    if (!isConfirmed) return;

    await dispatch(deleteUserAction(id))
      .unwrap()
      .then(() => {
        alert("Xoá thành công!");
        if (user?.id === id) {
          dispatch(logoutUserAction());
        }
        navigate("/");
      })
      .catch((err) => {
        alert("Xoá thất bại, vui lòng thử lại!");
        console.error("Delete failed", err);
      });
  };

  return (
    <ProfileCardStyled>
      <img src={personal_info.image} alt="avatar" />

      <StyledTitle level={4}>{personal_info.name}</StyledTitle>

      <Tag className="role">
        {personal_info.position || "Software Developer"}
      </Tag>
      <hr />
      <div className="contact-info">
        <p>
          <IconWrapper>
            <MailOutlined />
          </IconWrapper>
          {personal_info.email || "example@email.com"}
        </p>
        <p>
          <IconWrapper>
            <EnvironmentOutlined />
          </IconWrapper>
          {personal_info.location || "Unknown"}
        </p>
      </div>
      <div className="social-icons">
        <a href={personal_info.linkedin} target="_blank" rel="noreferrer">
          <LinkedinOutlined />
        </a>
        <a href={personal_info.github} target="_blank" rel="noreferrer">
          <GithubOutlined />
        </a>
        <a href={personal_info.instagram} target="_blank" rel="noreferrer">
          <InstagramOutlined />
        </a>
        <a href={personal_info.facebook} target="_blank" rel="noreferrer">
          <FacebookOutlined />
        </a>
        <a href={personal_info.twitter} target="_blank" rel="noreferrer">
          <TwitterOutlined />
        </a>
      </div>

      <Button style={{ marginTop: "20px" }} onClick={() => navigate("/")}>
        Back
      </Button>
      {user && (
        <Button
          style={{ margin: "20px", background: "#f10707" }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      )}
    </ProfileCardStyled>
  );
};

export default CardProfile;
