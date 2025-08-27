import { Card } from 'antd'
import styled from 'styled-components'
const ProfileCardStyled = styled(Card)`
  background-color: #333;
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
export default ProfileCardStyled
