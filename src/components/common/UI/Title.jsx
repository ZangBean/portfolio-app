import { Modal } from "antd";
import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #1f1f1f;
`;
export const TitleH2 = styled.h2`
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid #ccc;
`;

export const TitleH3 = styled.h3`
  text-align: center;
  font-size: 24px;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-header {
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .ant-modal-title {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
