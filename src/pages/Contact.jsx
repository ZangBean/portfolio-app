import { Form, Input, Button, Row, Col } from "antd";

export default function Contact() {
  return (
    <Row justify="center">
      <Col span={12}>
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
