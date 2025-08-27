import styled from "styled-components";
import { Form, Button, Typography } from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";

const { Title } = Typography;

export const StyledContainer = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;

  a {
    color: #1890ff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledForm = styled(Form)`
  margin-top: 20px;

  .ant-form-item-label > label {
    font-weight: 500;
    color: #333;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
`;
