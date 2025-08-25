import { Layout, Menu, Button } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const CenterMenu = styled(Menu)`
  flex: 1;
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
`;

export const LoginButton = styled(Button)`
  a {
    color: #fff;
  }
`;
