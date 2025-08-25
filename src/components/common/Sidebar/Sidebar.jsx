import { Layout, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/projectsSlice";

const { Sider } = Layout;

export default function Sidebar() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.projects.data);

  return (
    <Sider
      width={300}
      style={{ background: "#fff", padding: "20px", minHeight: "100vh" }}
    >
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
    </Sider>
  );
}
