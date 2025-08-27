import { Card } from 'antd'
import styled from 'styled-components'
const DarkCard = styled(Card)`
  background: #2a2a2a !important;
  border-radius: 12px;
  margin-bottom: 20px;

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
export default DarkCard
