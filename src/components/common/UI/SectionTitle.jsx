import styled from 'styled-components'
const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  color: #fff;
  margin-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60%;
    height: 4px; /* độ dày đường viền */
    background-color: #5facbc; /* màu xanh */
    border-radius: 3px;
  }
`
export default SectionTitle
