import { Row, Col, Typography, Card, Tag, Timeline } from 'antd'
import CardProfile from '../components/CardProfile'
import Container from '../components/common/UI/Container'
import SectionTitle from '../components/common/UI/SectionTitle'
import styled from 'styled-components'
import HighlightNumber from '../components/common/UI/HighlightNumber'
import HighlightText from '../components/common/UI/HighlightText'
import useUserDetail from '../hooks/useUserDetail'
import { Spin } from 'antd'
import FlexBox from '../components/common/UI/Flexbox'
import DarkCard from '../components/common/UI/DarkCard'
const { Paragraph } = Typography

const Experience = () => {
  const { selectedUser, status, error } = useUserDetail()

  if (status === 'loading' && !selectedUser) {
    return <Spin style={{ display: 'block', margin: '50px auto' }} />
  }

  if (error) {
    return <Paragraph style={{ color: 'red' }}>Lỗi: {error}</Paragraph>
  }

  if (!selectedUser) {
    return <Paragraph>Không tìm thấy người dùng</Paragraph>
  }

  const experience = selectedUser.cv?.experience || {}
  const cv = selectedUser.cv || {}
  const {
    personal_info,
    projects,
    target,
    certifications_awards,
    projects_completed,
    education,
    skills,
  } = cv

  // Nếu chỉ có 1 object thì cho vào mảng để dễ hiển thị Timeline
  const experiences = Array.isArray(experience) ? experience : [experience]

  return (
    <FlexBox>
      {/* Bên trái - Profile */}
      <Col span={6}>
        <CardProfile personal_info={personal_info} />
      </Col>

      {/* Bên phải - Content */}
      <Col span={16}>
        <Container>
          {/* Career Objective */}
          <SectionTitle level={3}>Career Snapshot</SectionTitle>
          <Paragraph style={{ color: '#fff' }}>{target}</Paragraph>

          {/* Highlights */}
          <div style={{ marginTop: '2rem' }}>
            <SectionTitle level={3}>Highlights & Successes</SectionTitle>
            <Row gutter={16}>
              <Col span={8}>
                <HighlightNumber>
                  +{experience?.years_of_experience || 0}
                </HighlightNumber>
                <HighlightText>YEARS OF EXPERIENCE</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>
                  +{projects_completed || projects?.length || 0}
                </HighlightNumber>
                <HighlightText>PROJECTS COMPLETED</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>+{certifications_awards || 0}</HighlightNumber>
                <HighlightText>CERTIFICATIONS & AWARDS</HighlightText>
              </Col>
            </Row>
          </div>

          {/* Experience Timeline */}
          {experiences && experiences.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <SectionTitle level={3}>Experience</SectionTitle>
              <Timeline
                items={experiences.map((exp, i) => ({
                  color: '#5facbc',
                  children: (
                    <div>
                      <div style={{ color: '#aaa', marginBottom: '4px' }}>
                        {exp.company}{' '}
                        {exp.website && (
                          <a
                            href={exp.website}
                            target='_blank'
                            rel='noreferrer'
                            style={{ color: '#0ff' }}
                          >
                            ({exp.website})
                          </a>
                        )}
                      </div>
                      <div style={{ color: '#0ff', marginBottom: '8px' }}>
                        {exp.period?.start} - {exp.period?.end || 'Present'}
                      </div>
                      {exp.description &&
                        exp.description.map((desc, idx) => (
                          <Paragraph
                            key={idx}
                            style={{ color: '#ddd', marginBottom: '4px' }}
                          >
                            • {desc}
                          </Paragraph>
                        ))}
                    </div>
                  ),
                }))}
              />
            </div>
          )}
          {/* Education */}
          {education && (
            <div style={{ marginTop: '2rem' }}>
              <SectionTitle level={3}>Education</SectionTitle>
              <DarkCard>
                <p style={{ margin: 0, color: '#fff' }}>
                  <b>{education.institution}</b>
                </p>
                <p style={{ margin: 0, color: '#ccc' }}>
                  {education.faculty} - {education.major}
                </p>
                <p style={{ margin: 0, color: '#aaa' }}>
                  {education.period?.start} -{' '}
                  {education.period?.end || 'Present'}
                </p>
              </DarkCard>
            </div>
          )}

          {/* Skills */}
          {skills && (
            <div style={{ marginTop: '2rem' }}>
              <SectionTitle level={3}>Technical Skills</SectionTitle>
              <Row gutter={16}>
                {Object.entries(skills).map(([key, list]) => (
                  <Col span={12} key={key} style={{ marginBottom: '1rem' }}>
                    <DarkCard title={key.toUpperCase()} variant={false}>
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
        </Container>
      </Col>
    </FlexBox>
  )
}

export default Experience

