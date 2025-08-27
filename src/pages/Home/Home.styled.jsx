import { List } from 'antd'
import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const StyledList = styled(List)`
  width: 100%; /* full width để hiển thị 4 cột */
`

export const Header = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #fff;
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

