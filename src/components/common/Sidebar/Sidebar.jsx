import { Layout, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/projectsSlice";
import { StyledSider } from "./Sidebar.styled";

export default function Sidebar() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.projects.data);

  return (
    <StyledSider width={300}>
      <List
        header={<div>Danh sách người dùng</div>}
        dataSource={users}
        renderItem={(user) => (
          <List.Item
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(selectUser(user))}
          >
            {user.name}
          </List.Item>
        )}
      />
    </StyledSider>
  );
}
