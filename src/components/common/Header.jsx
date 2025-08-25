import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default function AppHeader() {
  const items = [
    { key: "home", label: <Link to="/">Home</Link> },
    { key: "projects", label: <Link to="/projects">Projects</Link> },
    { key: "contact", label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" items={items} />
    </Header>
  );
}
