import { useSelector } from 'react-redux'
import { Typography, Row, Col, Card } from 'antd'
import styled from 'styled-components'
import HeaderUser from '../components/common/Header/HeaderUser'

const { Title, Paragraph } = Typography

const Container = styled.div`
  background-color: #333;
  color: #fff;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`

const HighlightNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const HighlightText = styled.div`
  font-size: 0.9rem;
  color: #fff;
`

const ProfileCard = styled(Card)`
  background-color: #333;

  color: #fff;

  .ant-card-body {
    padding: 1rem;
  }
`

const FeaturedWorkCard = styled(Card)`
  background-color: #2a2a2a;
  color: #fff;

  img {
    border-radius: 10px;
    width: 100%;
    max-height: 250px;
  }

  .ant-card-meta-title {
    color: #5facbc; /* đổi màu title */
    font-size: 1.1rem;
    font-weight: bold;
  }

  .ant-card-meta-description {
    color: #ccc; /* đổi màu description */
    font-size: 0.9rem;
    margin-top: 5px;
  }
`

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  color: #fff;
  margin-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60%;
    height: 4px; /* độ dày đường viền */
    background-color: #5facbc; /* màu xanh */
    border-radius: 3px;
  }
`

const AboutMe = () => {
  const selectedUser = useSelector((state) => state.projects.selectedUser)
  console.log(selectedUser)

  if (!selectedUser) {
    return <div>Loading...</div>
  }

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
        {/* Phần bên phải (content khác) */}
        <Col span={8}>
          <FeaturedWorkCard
            cover={
              <img
                src={
                  personal_info.image ||
                  'https://picsum.photos/200/300?grayscale'
                }
              />
            }
          >
            <Title>{personal_info.name}</Title>
            <Card.Meta
              style={{
                color: '#fff',
                minHeight: '150px',
              }}
            />
          </FeaturedWorkCard>
        </Col>

        {/* Phần bên trái (Home content) */}
        <Col span={16}>
          <Container>
            {/* Profile Info */}

            <SectionTitle level={3}>Digital Identity</SectionTitle>

            <Paragraph
              style={{
                color: '#fff',
              }}
            >
              {target}
            </Paragraph>

            {/* Highlights */}
            <div style={{ marginTop: '2rem' }}>
              <SectionTitle level={3}>Highlights & Successes</SectionTitle>
              <Row gutter={16}>
                <Col span={8}>
                  <HighlightNumber>
                    +{experience ? experience.description.length : 0}
                  </HighlightNumber>
                  <HighlightText>YEARS OF EXPERIENCE </HighlightText>
                </Col>
                <Col span={8}>
                  <HighlightNumber>
                    +{projects ? projects.length : 0}
                  </HighlightNumber>
                  <HighlightText>PROJECTS COMPLETED</HighlightText>
                </Col>
                <Col span={8}>
                  <HighlightNumber>
                    +{certifications_awards > 0 ? certifications_awards : 10}
                  </HighlightNumber>
                  <HighlightText>CERTIFICATIONS & AWARDS</HighlightText>
                </Col>
              </Row>
            </div>

            {/* Featured Work */}
            <div style={{ marginTop: '2rem' }}>
              <SectionTitle level={3}>Featured Work</SectionTitle>
              <Paragraph>A glimpse into my professional journey.</Paragraph>
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
                                : 'https://picsum.photos/200/300?grayscale'
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
export default AboutMe

