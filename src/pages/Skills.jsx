import { useSelector } from 'react-redux'
import { Row, Col, Typography, Card, Tag } from 'antd'
import CardProfile from '../components/CardProfile'
import Container from '../components/common/UI/Container'
import SectionTitle from '../components/common/UI/SectionTitle'
import Loading from '../components/Loading'
import styled from 'styled-components'
import HighlightNumber from '../components/common/UI/HighlightNumber'
import HighlightText from '../components/common/UI/HighlightText'
import FeaturedWorkCard from '../components/common/UI/FeaturedWorkCard'

const { Paragraph } = Typography

const DarkCard = styled(Card)`
  background: #2a2a2a !important;
  border-radius: 12px;

  .ant-card-head-title {
    color: #fff !important;
  }

  .ant-card-body {
    color: #fff !important;
  }

  .ant-card-meta-title {
    color: #fff !important;
    font-weight: 500;
  }

  .ant-card-meta-description {
    color: #ccc !important;
  }
`

const Skills = () => {
  const { cv } = useSelector((state) => state.projects.selectedUser)
  console.log('cv:', cv)

  if (!cv) {
    return <Loading />
  }

  const {
    personal_info,
    experience,
    projects,
    target,
    certifications_awards,
    projects_completed,
    education,
    languages,
    skills,
  } = cv

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
        {/* Bên trái - Profile */}
        <Col span={6}>
          <CardProfile personal_info={personal_info} />
        </Col>

        {/* Bên phải - Content */}
        <Col span={16}>
          <Container>
            {/* Career Objective */}
            <SectionTitle level={3}>Skills</SectionTitle>
            <Paragraph style={{ color: '#fff' }}>{target}</Paragraph>

            {/* Languages */}
            {languages && (
              <div style={{ marginTop: '2rem' }}>
                <SectionTitle level={3}>Languages</SectionTitle>
                {languages.map((lang, i) => (
                  <Tag
                    key={i}
                    color='blue'
                    style={{
                      marginBottom: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      // 🔹 để mỗi Tag chiếm 1 hàng
                      width: 'fit-content', // 🔹 vừa với nội dung
                    }}
                  >
                    {lang.language} ({lang.level})
                  </Tag>
                ))}
              </div>
            )}

            {/* Skills */}
            {skills && (
              <div style={{ marginTop: '2rem' }}>
                <SectionTitle level={3}>Technical Skills</SectionTitle>
                <Row gutter={16}>
                  {Object.entries(skills).map(([key, list]) => (
                    <Col span={12} key={key} style={{ marginBottom: '1rem' }}>
                      <DarkCard title={key.toUpperCase()} bordered={false}>
                        {list.map((item, idx) => (
                          <p key={idx} style={{ margin: 0 }}>
                            • {item}
                          </p>
                        ))}
                      </DarkCard>
                    </Col>
                  ))}
                </Row>
              </div>
            )}

            {/* Featured Work */}
            {projects && projects.length > 0 && (
              <div style={{ marginTop: '2rem' }}>
                <SectionTitle level={3}>Featured Work</SectionTitle>
                <Paragraph style={{ color: '#fff' }}>
                  A glimpse into my professional journey.
                </Paragraph>
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
            )}
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Skills

