import { useEffect } from "react";
import {
  StyledLayout,
  StyledList,
  Card,
  CardContent,
  Header,
  Description,
  Avatar,
  FallbackAvatar,
  Info,
  Title,
} from "./Home.styled";
import { UserAddOutlined } from "@ant-design/icons";
import { Spin, List, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsersAction } from "../../stores/screens/user/user.action";
import { setSelectedUser } from "../../stores/screens/user/user.reducer";
import Loading from "../../components/Loading";
import { useState } from "react";
import AddUserModal from "../../components/common/Modal/AddUserModal";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data || []);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <StyledLayout>
      {status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <StyledList
          grid={{ gutter: 16, column: 3 }}
          header={<Header>Danh sách người dùng</Header>}
          dataSource={users}
          renderItem={(user) => (
            <List.Item key={user.id}>
              <Link
                to={`/about/${user.id}`}
                style={{ textDecoration: "none" }}
                onClick={() => dispatch(setSelectedUser(user))}
              >
                <Card>
                  <CardContent>
                    {user.cv.personal_info.image ? (
                      <Avatar src={user.cv.personal_info.image} alt="avatar" />
                    ) : (
                      <FallbackAvatar>
                        {user.cv.personal_info.name[0]}
                      </FallbackAvatar>
                    )}
                    <Info>
                      <Title>{user.cv.personal_info.name}</Title>
                      <Description>
                        <p>Email: {user.cv.personal_info.email || "N/A"}</p>
                        <p>Phone: {user.cv.personal_info.phone || "N/A"}</p>
                      </Description>
                    </Info>
                  </CardContent>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      )}

      <Button type="primary" onClick={handleOpenModal}>
        <UserAddOutlined />
      </Button>
      <AddUserModal visible={isModalVisible} onClose={handleCloseModal} />
    </StyledLayout>
  );
}
