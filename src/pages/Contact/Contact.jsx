
import { Form, Input, Row, Col, Card, Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { StyledForm, StyledButton } from './Contact.styled'
import CardProfile from '../../components/CardProfile'
import { fetchUserById } from '../../redux/slices/projectsSlice'
import Container from '../../components/common/UI/Container'
import SectionTitle from '../../components/common/UI/SectionTitle'
import FlexBox from '../../components/common/UI/Flexbox'

import useUserDetail from "../../hooks/useUserDetail";
const { Paragraph } = Typography
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

  const dispatch = useDispatch()
  const { id } = useParams()
  const selectedUser = useSelector((state) => state.projects.selectedUser)
  const status = useSelector((state) => state.projects.status)
  console.log('data contact:', selectedUser.cv.target)
  useEffect(() => {
    dispatch(fetchUserById(id))
  }, [dispatch, id])
  const {
    personal_info,

    target,
  } = selectedUser.cv

  return (
    <FlexBox>
      <Row gutter={16}>
        {/* Phần bên phải (content khác) */}
        <Col span={6}>
          <CardProfile personal_info={personal_info} />
        </Col>
        {/* Phần bên trái (Home content) */}
        <Col span={16}>
          <Container>
            {/* Profile Info */}

            <SectionTitle level={3}>Contact Me</SectionTitle>

            <Paragraph
              style={{
                color: '#fff',
              }}
            >
              {target}
            </Paragraph>
            <Col>
              <StyledForm layout='vertical'>
                <Form.Item
                  label='Họ tên'
                  name='name'
                  rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item

                  label='Email'
                  name='email'
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Vui lòng nhập email hợp lệ',

                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item

                  label='Tin nhắn'
                  name='message'
                  rules={[
                    { required: true, message: 'Vui lòng nhập tin nhắn' },
                  ]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item>

                  <StyledButton type='primary' htmlType='submit'>
                    Gửi
                  </StyledButton>
                </Form.Item>
              </StyledForm>
            </Col>
          </Container>
        </Col>
      </Row>
    </FlexBox>
  )
}

