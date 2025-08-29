import Paragraph from "antd/es/typography/Paragraph";
import styled from "styled-components";

const ParagraphStyled = styled(Paragraph)`
  color: ${(props) => props.color || "#fff"};
`;

export default ParagraphStyled;
