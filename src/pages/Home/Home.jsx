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
import { Spin, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../redux/slices/projectsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.projects.data || []);
  const status = useSelector((state) => state.projects.status);

  return (
    <StyledLayout>
      {status === "loading" ? (
        <Spin style={{ padding: "20px", textAlign: "center" }} />
      ) : (
        <StyledList
          grid={{ gutter: 16, column: 1 }}
          header={<Header>Danh sách người dùng</Header>}
          dataSource={users}
          renderItem={(user) => (
            <List.Item>
              <Link to={`/about/${user.id}`} style={{ textDecoration: "none" }}>
                <Card onClick={() => dispatch(selectUser(user))}>
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
    </StyledLayout>
  );
}
