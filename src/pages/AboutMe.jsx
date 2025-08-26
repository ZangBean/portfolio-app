import { useSelector } from 'react-redux'
import { Typography, Row, Col, Card } from 'antd'
import Container from '../components/common/UI/Container'
import FeaturedWorkCard from '../components/common/UI/FeaturedWorkCard'
import HighlightNumber from '../components/common/UI/HighlightNumber'
import HighlightText from '../components/common/UI/HighlightText'
import SectionTitle from '../components/common/UI/SectionTitle'
import CardProfile from '../components/CardProfile'
import { FaRegStar } from 'react-icons/fa'
import { FaRegFolderOpen } from 'react-icons/fa'

const { Title, Paragraph } = Typography

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
        <CardProfile personal_info={personal_info} />

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
              <SectionTitle level={3}>
                <FaRegStar style={{ marginRight: '8px' }} />
                Highlights & Successes
              </SectionTitle>
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
              <SectionTitle level={3}>
                <FaRegFolderOpen style={{ marginRight: '8px' }} />
                Featured Work
              </SectionTitle>
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
export default AboutMe

