import { Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Row justify="center">
      <Col>
        <Title>Home</Title>
        <Paragraph>Your intro here.</Paragraph>
      </Col>
    </Row>
  );
}
