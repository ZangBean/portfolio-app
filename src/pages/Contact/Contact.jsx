import { Form, Input, Row, Col, Spin } from "antd";
import {
  StyledContainer,
  StyledParagraph,
  StyledForm,
  StyledButton,
} from "./Contact.styled";
import CardProfile from "../../components/CardProfile";
import useUserDetail from "../../hooks/useUserDetail";

export default function Contact() {
  const { selectedUser, status, error } = useUserDetail();

  if (status === "loading" && !selectedUser) {
    return <Spin style={{ display: "block", margin: "50px auto" }} />;
  }

  if (error) {
    return (
      <StyledParagraph style={{ color: "red" }}>Lỗi: {error}</StyledParagraph>
    );
  }

  if (!selectedUser) {
    return <StyledParagraph>Không tìm thấy người dùng</StyledParagraph>;
  }

  const { personal_info = {} } = selectedUser.cv || {};

  return (
    <StyledContainer>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          <Row gutter={16}>
            {/* Sidebar Profile */}
            <CardProfile personal_info={personal_info} />

            {/* Contact Form */}
            <Col span={16}>
              <StyledParagraph>
                <strong>Họ tên:</strong> {personal_info.name}
              </StyledParagraph>
              <StyledParagraph>
                <strong>Email:</strong> {personal_info.email}
              </StyledParagraph>
              <StyledParagraph>
                <strong>Điện thoại:</strong> {personal_info.phone}
              </StyledParagraph>
              <StyledParagraph>
                <strong>Github:</strong>{" "}
                <a
                  href={personal_info.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personal_info.github}
                </a>
              </StyledParagraph>

              <StyledForm layout="vertical">
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
                  rules={[
                    { required: true, message: "Vui lòng nhập tin nhắn" },
                  ]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                  <StyledButton type="primary" htmlType="submit">
                    Gửi
                  </StyledButton>
                </Form.Item>
              </StyledForm>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledContainer>
  );
}
