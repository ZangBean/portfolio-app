import { Link, useParams } from 'react-router-dom'
import { StyledUserHeader, StyledMenu } from './Header.styled'

export default function HeaderUser() {
  const { id } = useParams()

  const items = [
    { key: 'about', label: <Link to={`/about/${id}`}>About</Link> },
    {
      key: 'projects',
      label: <Link to={`/projects/${id}`}>Projects</Link>,
    },
    { key: 'skills', label: <Link to={`/skills/${id}`}>Skills</Link> },
    {
      key: 'experience',
      label: <Link to={`/experience/${id}`}>Experience</Link>,
    },
    { key: 'contact', label: <Link to={`/contact/${id}`}>Contact</Link> },
  ]

  return (
    <StyledUserHeader>
      <StyledMenu mode='horizontal' items={items} />
    </StyledUserHeader>
  )
}

