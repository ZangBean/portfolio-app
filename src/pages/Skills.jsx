import { useSelector } from 'react-redux'
import { Row, Col, List } from 'antd'
import CardProfile from '../components/CardProfile'
import Container from '../components/common/UI/Container'
import SectionTitle from '../components/common/UI/SectionTitle'
import Loading from '../components/Loading'
import styled from 'styled-components'
import { Card } from 'antd'

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

export default function Skills() {
  const selectedUser = useSelector((state) => state.projects.selectedUser)

  if (!selectedUser) {
    return <Loading />
  }

  const { personal_info, skills } = selectedUser.cv

  // Gom lại thành mảng để map
  const skillCategories = [
    { title: 'Frontend', data: skills.frontend },
    { title: 'Backend', data: skills.backend },
    { title: 'Database', data: skills.database },
    { title: 'Other', data: skills.other },
  ]

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
        <CardProfile personal_info={personal_info} />
        <Col span={16}>
          <Container>
            <SectionTitle level={3}>Skills</SectionTitle>
            <Row gutter={[16, 16]}>
              {skillCategories.map((category, index) => (
                <Col span={12} key={index}>
                  <DarkCard title={category.title} bordered={false}>
                    <List
                      dataSource={category.data}
                      renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                  </DarkCard>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

