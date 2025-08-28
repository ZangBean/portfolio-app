import { Link, useNavigate } from 'react-router-dom'
import { StyledHeader, Logo, LoginButton } from './Header.styled.js'
import { logoutUserAction } from '../../../stores/screens/login/login.action.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../../stores/screens/rootSelector.js'
import { AiOutlineLogout } from 'react-icons/ai'

export default function HeaderMenu() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logoutUserAction()).then(() => {
      navigate('/')
    })
  }

  return (
    <>
      <StyledHeader>
        <Logo>
          <Link to='/'>Portfolio </Link>
        </Logo>

        {user ? (
          <LoginButton type='primary' onClick={handleLogout}>
            <AiOutlineLogout title='Logout' />
          </LoginButton>
        ) : (
          <LoginButton type='primary'>
            <Link to='/login'>Login</Link>
          </LoginButton>
        )}
      </StyledHeader>
    </>
  )
}

