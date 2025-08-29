import { useEffect, useState } from 'react'
import {
  StyledLayout,
  StyledList,
  Card,
  CardContent,
  Header,
  Description,
  Avatar,
  FallbackAvatar,
  Info,
  Title,
} from './Home.styled'
import { UserAddOutlined } from '@ant-design/icons'
import { List, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsersAction } from '../../stores/screens/user/user.action'
import { setSelectedUser } from '../../stores/screens/user/user.reducer'
import Loading from '../../components/Loading'
import AddUserModal from '../../components/common/Modal/AddUserModal'
import ParagraphStyled from '../../components/common/UI/ParagraphStyled'
import { CiUser } from 'react-icons/ci'
import { ButtonAdd } from '../../components/common/UI/Button'
import ListStyled from '../../components/common/UI/ListStyled'

const { Search } = Input

export default function Home() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.data || [])
  const { status, error } = useSelector((state) => state.user)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleOpenModal = () => setIsModalVisible(true)
  const handleCloseModal = () => setIsModalVisible(false)

  useEffect(() => {
    dispatch(fetchUsersAction())
  }, [dispatch])

  if (status === 'loading') {
    return <Loading />
  } else if (status === 'failed') {
    return <ParagraphStyled color='red'>Error: {error}</ParagraphStyled>
  }

  // Filter users by search term
  const filteredUsers = users.filter((user) =>
    user.cv.personal_info.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <StyledLayout>
      <StyledList
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        header={
          <Header>
            <div className='title'>
              User List
              <CiUser className='icon-user' />
            </div>

            <div className='actions'>
              <Search
                style={{ width: '300px', marginTop: '8px' }}
                placeholder='Search user by name...'
                enterButton
                allowClear
                onSearch={(value) => setSearchTerm(value)}
              />

              <ButtonAdd
                type='primary'
                title='Add User'
                onClick={handleOpenModal}
              >
                Add
                <UserAddOutlined />
              </ButtonAdd>
            </div>
          </Header>
        }
        dataSource={filteredUsers}
        pagination={{
          pageSize: 9,
          showSizeChanger: false,
          position: 'bottom',
          align: 'center',
        }}
        renderItem={(user) => (
          <ListStyled key={user.id}>
            <Link
              to={`/about/${user.id}`}
              onClick={() => dispatch(setSelectedUser(user))}
            >
              <Card>
                <CardContent>
                  {user.cv.personal_info.image ? (
                    <Avatar src={user.cv.personal_info.image} alt='avatar' />
                  ) : (
                    <FallbackAvatar>
                      {user.cv.personal_info.name[0] || 'U'}
                    </FallbackAvatar>
                  )}
                  <Info>
                    <Title>
                      {user.cv.personal_info.name || 'Unnamed User'}
                    </Title>
                    <Description>
                      <p>Email: {user.cv.personal_info.email || 'N/A'}</p>
                      <p>Phone: {user.cv.personal_info.phone || 'N/A'}</p>
                    </Description>
                  </Info>
                </CardContent>
              </Card>
            </Link>
          </ListStyled>
        )}
      />

      <AddUserModal visible={isModalVisible} onClose={handleCloseModal} />
    </StyledLayout>
  )
}

