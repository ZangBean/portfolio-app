import { Form, Input, Button, Row, Col, Typography } from "antd";
import { useSelector } from "react-redux";

const { Title, Paragraph } = Typography;

export default function Contact() {
  const selectedUser = useSelector((state) => state.projects.selectedUser);

  return (
    <Row justify="center">
      <Col span={12}>
        <Title>Contact</Title>
        {selectedUser ? (
          <>
            <Paragraph>Email: {selectedUser.contact.email}</Paragraph>
            <Paragraph>Phone: {selectedUser.contact.phone}</Paragraph>
          </>
        ) : (
          <Paragraph>Loading...</Paragraph>
        )}
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Message">
            <Input.TextArea />
          </Form.Item>
          <Button type="primary">Submit</Button>
        </Form>
      </Col>
    </Row>
  );
}
