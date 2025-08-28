import { Row, Col } from 'antd'

import CardProfile from '../components/CardProfile'
import Container from '../components/common/UI/Container'
import FeaturedWorkCard from '../components/common/UI/FeaturedWorkCard'
import SectionTitle from '../components/common/UI/SectionTitle'
import Loading from '../components/Loading'
import useUserDetail from '../hooks/useUserDetail'
import FlexBox from '../components/common/UI/Flexbox'
import ParagraphStyled from '../components/common/UI/ParagraphStyled'
import MarginTop from '../components/common/UI/MarginTop'
import DescriptionCard from '../components/common/UI/DescriptionCard'

export default function Projects() {
  const { selectedUser, status, error } = useUserDetail()

  if (status === 'loading' && !selectedUser) {
    return <Loading />
  }

  if (error || !selectedUser) {
    return <ParagraphStyled color='red'>Lỗi: {error}</ParagraphStyled>
  }

  const { personal_info, projects = [] } = selectedUser.cv || {}

  return (
    <FlexBox>
      <Col span={6}>
        <CardProfile personal_info={personal_info} />
      </Col>

      <Col span={16}>
        <Container>
          <SectionTitle>Creative Showcase</SectionTitle>

          <MarginTop mt='2rem'>
            <Row gutter={16}>
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
            </Row>
          </MarginTop>
        </Container>
      </Col>
    </FlexBox>
  )
}

