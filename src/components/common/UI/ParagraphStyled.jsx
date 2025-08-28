import Paragraph from 'antd/es/typography/Paragraph'
import styled from 'styled-components'

// Đặt prop 'color' để tùy chỉnh màu
const ParagraphStyled = styled(Paragraph)`
  color: ${(props) => props.color || '#000'}; // default là đen
`

export default ParagraphStyled
