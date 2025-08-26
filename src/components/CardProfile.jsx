import { Card, Typography, Col } from 'antd'
import styled from 'styled-components'

const { Title } = Typography

const FeaturedWorkCard = styled(Card)`
  background-color: #2a2a2a;
  color: #fff;

  img {
    border-radius: 10px;
    width: 100%;
    max-height: 250px;
  }

  .ant-card-meta-title {
    color: #5facbc;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .ant-card-meta-description {
    color: #ccc;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`

const ProfileCard = ({ personal_info }) => {
  return (
    <Col span={8}>
      <FeaturedWorkCard
        cover={
          <img
            src={
              personal_info.image || 'https://picsum.photos/200/300?grayscale'
            }
          />
        }
      >
        <Title style={{ color: '#fff' }}>{personal_info.name}</Title>
        <Card.Meta
          style={{
            color: '#fff',
            minHeight: '150px',
          }}
        />
      </FeaturedWorkCard>
    </Col>
  )
}
export default ProfileCard
