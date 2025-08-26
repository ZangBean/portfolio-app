import { Form, Input, Button, Row, Col, Typography } from "antd";
import { useSelector } from "react-redux";

const { Title, Paragraph } = Typography;

export default function Contact() {
  const selectedUser = useSelector((state) => state.projects.selectedUser);

  return (
    <Row justify="center">
      <Col span={12}>
        <Title>Liên hệ</Title>
        {selectedUser ? (
          <>
            <Paragraph>
              <strong>Họ tên:</strong> {selectedUser.cv.personal_info.name}
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> {selectedUser.cv.personal_info.email}
            </Paragraph>
            <Paragraph>
              <strong>Điện thoại:</strong> {selectedUser.cv.personal_info.phone}
            </Paragraph>
            <Paragraph>
              <strong>Github:</strong>{" "}
              <a
                href={selectedUser.cv.personal_info.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedUser.cv.personal_info.github}
              </a>
            </Paragraph>
          </>
        ) : (
          <Paragraph>Đang tải...</Paragraph>
        )}
        <Form layout="vertical">
          <Form.Item
            label="Họ tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Vui lòng nhập email hợp lệ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tin nhắn"
            name="message"
            rules={[{ required: true, message: "Vui lòng nhập tin nhắn" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
