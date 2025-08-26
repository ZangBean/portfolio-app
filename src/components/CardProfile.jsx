import { Card, Col, Typography, Tag } from 'antd'
import {
  MailOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

const { Title, Text } = Typography

const ProfileCardStyled = styled(Card)`
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;

  img {
    border-radius: 10px;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: 20px auto;
    display: block;
  }

  .ant-typography {
    color: #fff;
  }

  .role {
    margin: 8px 0 16px;
  }

  .contact-info {
    text-align: left;
    margin: 16px 0;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
    font-size: 20px;
  }

  .social-icons a {
    color: #fff;
    margin-top: 20px;
  }

  .social-icons a:hover {
    color: #5facbc;
  }
`
const IconWrapper = styled.span`
  witdh: 28px;

  color: #5facbc; /* màu icon */
  margin-right: 8px;
  font-size: 14px;
  margin: 10px 6px;
  padding-left: 20x;
`

const CardProfile = ({ personal_info }) => {
  return (
    <Col span={6}>
      <ProfileCardStyled>
        {/* Avatar */}
        <img
          src={personal_info.image || 'https://picsum.photos/200/300?grayscale'}
          alt='avatar'
        />

        {/* Tên */}
        <Title level={4} style={{ fontFamily: 'cursive', marginBottom: 0 }}>
          {personal_info.name}
        </Title>

        {/* Chức danh */}
        <Tag color='default' className='role'>
          {personal_info.position || 'Software Developer'}
        </Tag>
        <hr />

        {/* Email + Location */}
        <div className='contact-info'>
          <p>
            <IconWrapper>
              <MailOutlined />
            </IconWrapper>
            {personal_info.email || 'example@email.com'}
          </p>
          <p>
            <IconWrapper>
              <EnvironmentOutlined />
            </IconWrapper>
            {personal_info.location || 'Unknown'}
          </p>
        </div>

        {/* Social icons */}
        <div className='social-icons'>
          <a href={personal_info.linkedin} target='_blank' rel='noreferrer'>
            <LinkedinOutlined />
          </a>
          <a href={personal_info.github} target='_blank' rel='noreferrer'>
            <GithubOutlined />
          </a>
          <a href={personal_info.instagram} target='_blank' rel='noreferrer'>
            <InstagramOutlined />
          </a>
          <a href={personal_info.facebook} target='_blank' rel='noreferrer'>
            <FacebookOutlined />
          </a>
        </div>
      </ProfileCardStyled>
    </Col>
  )
}

export default CardProfile
