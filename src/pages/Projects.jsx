import { useSelector } from 'react-redux'
import { List, Card, Typography, Row, Col } from 'antd'
import styled from 'styled-components'
import CardProfile from '../components/CardProfile'
import Container from '../components/common/UI/Container'
import FeaturedWorkCard from '../components/common/UI/FeaturedWorkCard'
import SectionTitle from '../components/common/UI/SectionTitle'

const { Title, Paragraph } = Typography

export const StyledContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

export default function Projects() {
  const { selectedUser, status } = useSelector((state) => state.projects)
  const {
    personal_info,
    experience,
    projects,
    target,
    certifications_awards,
    image,
  } = selectedUser.cv

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        maxWidth: '1000px',
      }}
    >
      <Row gutter={16}>
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
                {projects &&
                  projects.map((project, index) => (
                    <Col span={12} key={index} style={{ marginBottom: '1rem' }}>
                      <FeaturedWorkCard
                        cover={
                          <img
                            alt={project.title}
                            src={
                              image
                                ? project.image
                                : 'https://picsum.photos/200/200?grayscale'
                            }
                          />
                        }
                      >
                        <Card.Meta
                          title={project.title}
                          description={project.description}
                          style={{
                            color: '#fff',
                            minHeight: '150px',
                          }}
                        />
                      </FeaturedWorkCard>
                    </Col>
                  ))}
              </Row>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

