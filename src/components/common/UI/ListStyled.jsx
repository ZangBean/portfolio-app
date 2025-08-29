import styled from 'styled-components'
import { List } from 'antd'

// List.Item = li.ant-list-item
const ListStyled = styled(List.Item)`
  border: 1px solid transparent;
  border-radius: 12px;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 3px solid #00f2ff; /* hover mới apply */
  }
`
export default ListStyled
