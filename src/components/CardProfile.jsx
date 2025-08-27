import { Card, Col, Typography, Tag, Button } from 'antd'
import {
  MailOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons'

import { useNavigate } from 'react-router-dom'
import ProfileCardStyled from './common/UI/ProfileCardStyled'
import IconWrapper from './common/UI/IconWrapper'

const { Title, Text } = Typography

const CardProfile = ({ personal_info }) => {
  const navigate = useNavigate()
  return (
    <ProfileCardStyled>
      <img
        src={personal_info.image || 'https://picsum.photos/200/300?grayscale'}
        alt='avatar'
      />

      <Title level={4} style={{ fontFamily: 'cursive', marginBottom: 0 }}>
        {personal_info.name}
      </Title>

      <Tag color='default' className='role'>
        {personal_info.position || 'Software Developer'}
      </Tag>
      <hr />

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
        <a href={personal_info.twitter} target='_blank' rel='noreferrer'>
          <TwitterOutlined />
        </a>
      </div>
      <Button style={{ marginTop: '  20px' }} onClick={() => navigate('/')}>
        Back
      </Button>
    </ProfileCardStyled>
  )
}

export default CardProfile
