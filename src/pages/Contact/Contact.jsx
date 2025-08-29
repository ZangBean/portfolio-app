import { Form, Input, Col } from "antd";
import { StyledForm, StyledButton, StyledParagraph } from "./Contact.styled";
import CardProfile from "../../components/CardProfile";
import Container from "../../components/common/UI/Container";
import SectionTitle from "../../components/common/UI/SectionTitle";
import FlexBox from "../../components/common/UI/Flexbox";
import useUserDetail from "../../hooks/useUserDetail";
import Loading from "../../components/Loading";
import DarkCard from "../../components/common/UI/DarkCard";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import IconWrapper from "../../components/common/UI/IconWrapper";
import ParagraphStyled from "../../components/common/UI/ParagraphStyled";

export default function Contact() {
  const { selectedUser, status, error } = useUserDetail();

  if (status === "loading" && !selectedUser) {
    return <Loading />;
  }

  if (error || !selectedUser) {
    return <ParagraphStyled color="red">Error: {error}</ParagraphStyled>;
  }

  const { personal_info = {} } = selectedUser.cv || {};

  return (
    <FlexBox>
      <Col span={6}>
        <CardProfile personal_info={personal_info} />
      </Col>
      <Col span={16}>
        <Container>
          <SectionTitle level={3}>Let’s Connect</SectionTitle>
          <DarkCard>
            <p>
              <IconWrapper>
                <MdOutlineMail />
              </IconWrapper>
              {personal_info?.email}
            </p>
            <p>
              <IconWrapper>
                <MdOutlinePhone />
              </IconWrapper>
              {personal_info.phone}
            </p>
          </DarkCard>
          <Col>
            <SectionTitle>Contact Form</SectionTitle>
            <StyledForm layout="vertical">
              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  { required: true, message: "Please enter your full name" },
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
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <StyledButton type="primary" htmlType="submit">
                  Send
                </StyledButton>
              </Form.Item>
            </StyledForm>
          </Col>
        </Container>
      </Col>
    </FlexBox>
  );
}
