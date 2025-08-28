import { Row, Col, Typography, Card, Tag, Timeline } from 'antd'
import CardProfile from '../components/CardProfile'
import Container from '../components/common/UI/Container'
import SectionTitle from '../components/common/UI/SectionTitle'
import HighlightNumber from '../components/common/UI/HighlightNumber'
import HighlightText from '../components/common/UI/HighlightText'
import useUserDetail from '../hooks/useUserDetail'
import { Spin } from 'antd'
import FlexBox from '../components/common/UI/Flexbox'
import DarkCard from '../components/common/UI/DarkCard'
import MarginTop from '../components/common/UI/MarginTop'
import ParagraphStyled from '../components/common/UI/ParagraphStyled'
import TimelineStyled from '../components/common/UI/TimelineStyled'
import Loading from '../components/Loading'

const Experience = () => {
  const { selectedUser, status, error } = useUserDetail()

  if (status === 'loading' && !selectedUser) {
    return <Loading />
  }

  if (error || !selectedUser) {
    return <ParagraphStyled color='red'>Lỗi: {error}</ParagraphStyled>
  }

  const {
    personal_info,
    projects,
    target,
    certifications_awards,
    projects_completed,
    education,
    skills,
    experience,
  } = selectedUser.cv || {}

  const experiences = Array.isArray(experience) ? experience : [experience]

  return (
    <FlexBox>
      <Col span={6}>
        <CardProfile personal_info={personal_info} />
      </Col>
      <Col span={16}>
        <Container>
          <SectionTitle level={3}>Career Snapshot</SectionTitle>
          <ParagraphStyled color='#fff'>{target}</ParagraphStyled>
          <MarginTop mt='2rem'>
            <SectionTitle level={3}>Highlights & Successes</SectionTitle>
            <Row gutter={16}>
              <Col span={8}>
                <HighlightNumber>
                  +{experience?.years_of_experience || 1}
                </HighlightNumber>
                <HighlightText>YEARS OF EXPERIENCE</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>
                  +{projects_completed || projects?.length || 1}
                </HighlightNumber>
                <HighlightText>PROJECTS COMPLETED</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>+{certifications_awards || 1}</HighlightNumber>
                <HighlightText>CERTIFICATIONS & AWARDS</HighlightText>
              </Col>
            </Row>
          </MarginTop>

          {/* Experience Timeline */}
          {experiences && experiences.length > 0 && (
            <MarginTop mt='2rem'>
              <SectionTitle level={3}>Experience</SectionTitle>
              <TimelineStyled
                items={experiences.map((exp, i) => ({
                  color: '#5facbc',
                  children: (
                    <div>
                      <div className='experience-infor'>
                        {exp.company}{' '}
                        {exp.website && (
                          <a
                            href={exp.website}
                            target='_blank'
                            rel='noreferrer'
                          >
                            ({exp.website})
                          </a>
                        )}
                      </div>
                      <div className='time-start'>
                        {exp.period?.start} - {exp.period?.end || 'Present'}
                      </div>
                      {exp.description &&
                        exp.description.map((desc, idx) => (
                          <ParagraphStyled color='#fff' key={idx}>
                            • {desc}
                          </ParagraphStyled>
                        ))}
                    </div>
                  ),
                }))}
              />
            </MarginTop>
          )}

          {education && (
            <MarginTop mt='2rem'>
              <SectionTitle level={3}>Education</SectionTitle>
              <DarkCard>
                <p>
                  <b>{education.institution}</b>
                </p>
                <p>
                  {education.faculty} - {education.major}
                </p>
                <p className='time-start'>
                  {education.period?.start} -{' '}
                  {education.period?.end || 'Present'}
                </p>
              </DarkCard>
            </MarginTop>
          )}

          {skills && (
            <MarginTop mt='2rem'>
              <SectionTitle level={3}>Technical Skills</SectionTitle>
              <Row gutter={16}>
                {Object.entries(skills).map(([key, list]) => (
                  <Col span={12} key={key}>
                    <DarkCard title={key.toUpperCase()} variant={false}>
                      {list.map((item, idx) => (
                        <p key={idx}>• {item}</p>
                      ))}
                    </DarkCard>
                  </Col>
                ))}
              </Row>
            </MarginTop>
          )}
        </Container>
      </Col>
    </FlexBox>
  )
}

export default Experience

