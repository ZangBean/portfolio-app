import { Typography, Row, Col } from "antd";
import { useSelector } from "react-redux";

const { Title, Paragraph } = Typography;

export default function Home() {
  const selectedUser = useSelector((state) => state.projects.selectedUser);

  return (
    <Row justify="center">
      <Col>
        <Title>Home</Title>
        <Paragraph>{selectedUser ? selectedUser.home : "Loading..."}</Paragraph>
      </Col>
    </Row>
  );
}
