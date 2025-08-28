import { Card } from 'antd'
import styled from 'styled-components'

const FeaturedWorkCard = styled(Card)`
  background-color: #2a2a2a;
  color: #fff;

  .ant-card-cover img {
    border-radius: 10px;
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }
  img:hover {
    transform: scale(0.98);
  }

  .ant-card-meta-title {
    color: #5facbc; /* đổi màu title */
    font-size: 1.1rem;
    font-weight: bold;
  }

  .ant-card-meta-description {
    color: #ccc; /* đổi màu description */
    font-size: 0.9rem;
    margin-top: 6px;
  }
`
export default FeaturedWorkCard
