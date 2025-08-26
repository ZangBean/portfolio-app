import { Link } from 'react-router-dom'
import { StyledHeader, Logo, CenterMenu, LoginButton } from './Header.styled.js'

export default function HeaderUser() {
  const items = [
    { key: 'home', label: <Link to='/about/:id'>About Me</Link> },
    { key: 'projects', label: <Link to='/projects/:id'>Projects</Link> },
    { key: 'skills', label: <Link to='/skills/:id'>Skills</Link> },
    { key: 'experience', label: <Link to='/experience/:id'>Experience</Link> },
    { key: 'contact', label: <Link to='/contact/:id'>Contact</Link> },
  ]

  return (
    <StyledHeader>
      <CenterMenu theme='dark' mode='horizontal' items={items} />
    </StyledHeader>
  )
}

