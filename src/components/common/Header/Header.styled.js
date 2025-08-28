import { Layout, Menu, Button } from 'antd'
import styled from 'styled-components'

const { Header } = Layout

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const CenterMenu = styled(Menu)`
  justify-content: center;
  display: flex;
  border-bottom: none;
  background: transparent;

  .ant-menu-item {
    font-weight: bold;
    margin: 0 12px;

    a {
      color: #fff;
    }
  }

  .ant-menu-item-active a {
    color: #1890ff;
  }
`

export const LoginButton = styled(Button)`
  a {
    color: #fff;
  }
`

export const StyledUserHeader = styled.div`
  background: #1e1e1e;
  margin-bottom: 20px;
`

export const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  flex: 1;
  background: #1e1e1e;

  border: none;

  .ant-menu-item {
    font-weight: bold;
    margin: 0 12px;

    a {
      color: #fff;
    }
    &:hover {
      a {
        color: #fff;
      }
    }
  }

  .ant-menu-item-selected a {
    color: #1890ff;
  }
`

