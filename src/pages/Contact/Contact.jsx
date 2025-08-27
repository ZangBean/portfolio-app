import { Form, Input, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  StyledContainer,
  StyledParagraph,
  StyledForm,
  StyledButton,
} from "./Contact.styled";
import CardProfile from "../../components/CardProfile";
import { fetchUserById } from "../../redux/slices/projectsSlice";

export default function Contact() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedUser = useSelector((state) => state.projects.selectedUser);
  const status = useSelector((state) => state.projects.status);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  return (
    <StyledContainer>
      <Row justify="center" gutter={16}>
        <Col span={18}>
          {status === "loading" ? (
            <StyledParagraph>Đang tải...</StyledParagraph>
          ) : selectedUser && selectedUser.id.toString() === id.toString() ? (
            <Row gutter={16}>
              <CardProfile personal_info={selectedUser.cv.personal_info} />
              <Col>
                <StyledParagraph>
                  <strong>Họ tên:</strong> {selectedUser.cv.personal_info.name}
                </StyledParagraph>
                <StyledParagraph>
                  <strong>Email:</strong> {selectedUser.cv.personal_info.email}
                </StyledParagraph>
                <StyledParagraph>
                  <strong>Điện thoại:</strong>{" "}
                  {selectedUser.cv.personal_info.phone}
                </StyledParagraph>
                <StyledParagraph>
                  <strong>Github:</strong>{" "}
                  <a
                    href={selectedUser.cv.personal_info.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedUser.cv.personal_info.github}
                  </a>
                </StyledParagraph>
              </Col>
              <Col span={16}>
                <StyledForm layout="vertical">
                  <Form.Item
                    label="Họ tên"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập họ tên" },
                    ]}
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
          ) : (
            <StyledParagraph>Không tìm thấy người dùng</StyledParagraph>
          )}
        </Col>
      </Row>
    </StyledContainer>
  );
}
