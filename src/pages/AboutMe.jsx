import { Typography, Row, Col } from 'antd'
import { FaRegStar, FaRegFolderOpen } from 'react-icons/fa'
import Container from '../components/common/UI/Container'
import FeaturedWorkCard from '../components/common/UI/FeaturedWorkCard'
import HighlightNumber from '../components/common/UI/HighlightNumber'
import HighlightText from '../components/common/UI/HighlightText'
import SectionTitle from '../components/common/UI/SectionTitle'
import CardProfile from '../components/CardProfile'
import Loading from '../components/Loading'
import useUserDetail from '../hooks/useUserDetail'
import FlexBox from '../components/common/UI/Flexbox'
import ParagraphStyled from '../components/common/UI/ParagraphStyled'
import DescriptionCard from '../components/common/UI/DescriptionCard'
import StyledCard from '../components/common/UI/Card'
import MarginTop from '../components/common/UI/MarginTop'

const { Paragraph } = Typography

export default function AboutMe() {
  const { selectedUser, status, error } = useUserDetail()

  if (status === 'loading' && !selectedUser) return <Loading />
  if (error)
    return <ParagraphStyled color='red'>Error: {error}</ParagraphStyled>
  if (!selectedUser) return <Paragraph>Không tìm thấy người dùng</Paragraph>

  const {
    personal_info = {},
    experience = {},
    projects = [],
    target = '',
    certifications_awards = 0,
  } = selectedUser.cv || {}

  return (
    <FlexBox>
      <Col span={6}>
        <CardProfile
          personal_info={personal_info}
          selectedUser={selectedUser}
        />
      </Col>
      <Col span={16}>
        <Container>
          <SectionTitle level={3}>Digital Identity</SectionTitle>
          <ParagraphStyled color='#fff'>{target}</ParagraphStyled>
          <div style={{ marginTop: '2rem' }}>
            <SectionTitle level={3}>
              <FaRegStar style={{ marginRight: '8px' }} />
              Highlights & Successes
            </SectionTitle>
            <Row gutter={16}>
              <Col span={8}>
                <HighlightNumber>
                  +{experience?.description?.length || 0}
                </HighlightNumber>
                <HighlightText>YEARS OF EXPERIENCE</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>+{projects.length}</HighlightNumber>
                <HighlightText>PROJECTS COMPLETED</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>
                  +{certifications_awards || 10}
                </HighlightNumber>
                <HighlightText>CERTIFICATIONS & AWARDS</HighlightText>
              </Col>
            </Row>
          </div>

          {/* Featured Work */}
          <MarginTop mt='2rem'>
            <SectionTitle level={3}>
              <FaRegFolderOpen style={{ marginRight: '8px' }} />
              Featured Work
            </SectionTitle>
            <ParagraphStyled color='#fff'>
              A glimpse into my professional journey.
            </ParagraphStyled>
            <StyledCard gutter={16}>
              {projects.map((project, index) => (
                <Col span={12} key={index}>
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
                    <DescriptionCard>
                      <strong>{project.title}</strong>
                      <p>{project.description}</p>
                    </DescriptionCard>{' '}
                  </FeaturedWorkCard>
                </Col>
              ))}
            </StyledCard>
          </MarginTop>
        </Container>
      </Col>
    </FlexBox>
  )
}

