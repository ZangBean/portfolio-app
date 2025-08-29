import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUserAction } from '../stores/screens/user/user.action'
import { logoutUserAction } from '../stores/screens/login/login.action'
import { selectUser } from '../stores/screens/rootSelector'
import { Modal, Tag } from 'antd'
import { useState } from 'react'
import ProfileCardStyled from './common/UI/ProfileCardStyled'
import IconWrapper from './common/UI/IconWrapper'
import StyledTitle from './common/UI/StyledTitle'
import { ButtonDelete, ButtonBack, ButtonEdit } from './common/UI/Button'
import {
  MailOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import AddUserModal from '../components/common/Modal/AddUserModal'

const { confirm } = Modal

const CardProfile = ({ personal_info, selectedUser }) => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleEdit = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  const handleDelete = () => {
    if (selectedUser?.id !== id) return

    confirm({
      title: 'Xác nhận xóa',
      content: 'Bạn có chắc chắn muốn xóa user này không?',
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk: async () => {
        try {
          await dispatch(deleteUserAction(id)).unwrap()
          Modal.success({
            title: 'Thành công',
            content: 'Xóa user thành công!',
            onOk: () => {
              if (user?.id === id) {
                dispatch(logoutUserAction())
              }
              navigate('/')
            },
          })
        } catch (err) {
          Modal.error({
            title: 'Lỗi',
            content: 'Xóa thất bại, vui lòng thử lại!',
          })
          console.error('Xóa thất bại', err)
        }
      },
    })
  }

  return (
    <ProfileCardStyled>
      <img src={personal_info.image} alt='avatar' />
      <StyledTitle level={4}>{personal_info.name}</StyledTitle>
      <Tag className='role'>
        {personal_info.position || 'Nhà phát triển phần mềm'}
      </Tag>
      <hr />
      <div className='contact-info'>
        <p>
          <IconWrapper>
            <MailOutlined />
          </IconWrapper>
          {personal_info.email || 'example@email.com'}
        </p>
        <p>
          <IconWrapper>
            <EnvironmentOutlined />
          </IconWrapper>
          {personal_info.location || 'Không xác định'}
        </p>
      </div>
      <div className='social-icons'>
        <a href={personal_info.linkedin} target='_blank' rel='noreferrer'>
          <LinkedinOutlined />
        </a>
        <a href={personal_info.github} target='_blank' rel='noreferrer'>
          <GithubOutlined />
        </a>
        <a href={personal_info.instagram} target='_blank' rel='noreferrer'>
          <InstagramOutlined />
        </a>
        <a href={personal_info.facebook} target='_blank' rel='noreferrer'>
          <FacebookOutlined />
        </a>
        <a href={personal_info.twitter} target='_blank' rel='noreferrer'>
          <TwitterOutlined />
        </a>
      </div>

      {user ? (
        <>
          <ButtonEdit onClick={handleEdit}>Edit</ButtonEdit>
          <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
        </>
      ) : (
        <ButtonBack onClick={() => navigate('/')}>Back</ButtonBack>
      )}

      <AddUserModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        user={selectedUser}
        isEditMode={true}
      />
    </ProfileCardStyled>
  )
}

export default CardProfile
