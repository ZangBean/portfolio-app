
import { useSelector } from 'react-redux'
import { List, Card, Typography, Row, Col } from 'antd'
import styled from 'styled-components'
import CardProfile from '../components/CardProfile'
import Container from '../components/common/UI/Container'
import FeaturedWorkCard from '../components/common/UI/FeaturedWorkCard'
import SectionTitle from '../components/common/UI/SectionTitle'
import Loading from '../components/Loading'
import useUserDetail from '../hooks/useUserDetail'
import FlexBox from '../components/common/UI/Flexbox'


const DarkCard = styled(Card)`
  background: #2a2a2a !important;

  .ant-card-head-title {
    color: #fff !important;
  }

  .ant-card-body {
    color: #fff !important;
  }

  .ant-list-item {
    color: #fff !important;
  }
`

export default function Projects() {
  const { selectedUser, status, error } = useUserDetail()

  if (status === 'loading' && !selectedUser) {
    return <Loading />
  }

  if (error) {
    return <p style={{ color: 'red' }}>Lỗi: {error}</p>
  }

  if (!selectedUser) {
    return <p>Không tìm thấy người dùng</p>
  }


  const { personal_info, projects = [], image } = selectedUser.cv || {}

  return (
    <FlexBox>
      <Col span={6}>
        <CardProfile personal_info={personal_info} />
      </Col>

      {/* Phần bên trái (Home content) */}
      <Col span={16}>
        <Container>
          {/* Profile Info */}
          <SectionTitle>Creative Showcase</SectionTitle>

          {/* Featured Work */}
          <div style={{ marginTop: '2rem' }}>
            <Row gutter={16}>
              {projects.map((project, index) => (
                <Col span={12} key={index} style={{ marginBottom: '1rem' }}>
                  <FeaturedWorkCard
                    cover={
                      <img
                        alt={project.title}
                        src={
                          project.image ||
                          'https://picsum.photos/200/200?grayscale'
                        }

  
                      />
                    }
                  >
                    <Card.Meta
                      title={project.title}
                      description={project.description}
                      style={{ color: '#fff', minHeight: '150px' }}
                    />
                  </FeaturedWorkCard>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Col>
    </FlexBox>
  )
}

