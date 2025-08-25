import { Layout, List } from "antd";

const { Sider } = Layout;

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];

export default function Sidebar() {
  return (
    <Sider width={200} style={{ background: "#fff", padding: "20px" }}>
      <List
        header={<div>Danh sách người dùng</div>}
        dataSource={users}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      />
    </Sider>
  );
}
