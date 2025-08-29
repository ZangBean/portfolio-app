import { List } from 'antd'
import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const StyledList = styled(List)`
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  color: #fff;
  flex-wrap: wrap;

  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 24px;
    font-weight: bold;
  }

  .icon-user {
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s, color 0.3s;
    &:hover {
      color: #40a9ff;
      transform: scale(1.2);
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* responsive */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;

    .title {
      font-size: 20px;
      width: 100%; /* chiếm 1 hàng riêng */
    }

    .actions {
      width: 100%;
      display: flex;
      justify-content: space-between; /* Search trái, Button phải */
    }

    .ant-input-search {
      flex: 1;
    }

    button {
      flex-shrink: 0;
    }
  }
`

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  transition: box-shadow 0.3s;
  height: 100%;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 16px;
  object-fit: cover;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
`

export const FallbackAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 16px;
  background: #1890ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
`

export const Info = styled.div`
  flex: 1;
`

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`

export const Description = styled.div`
  font-size: 14px;
  color: #666;
`

