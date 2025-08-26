import { Layout, List, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/projectsSlice";
import { StyledSider } from "./Sidebar.styled";

export default function Sidebar() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.projects.data || []);
  const status = useSelector((state) => state.projects.status);

  return (
    <StyledSider width={300}>
      {status === "loading" ? (
        <Spin style={{ padding: "20px", textAlign: "center" }} />
      ) : (
        <List
          header={<div>Danh sách người dùng</div>}
          dataSource={users}
          renderItem={(user) => (
            <List.Item
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(selectUser(user))}
            >
              {user.cv.personal_info.name}
            </List.Item>
          )}
        />
      )}
    </StyledSider>
  );
}
