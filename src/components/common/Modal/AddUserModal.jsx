import { Modal, Button, Row, Col } from 'antd'
import useAddUserForm from '../../../hooks/useAddUserForm'
import AboutForm from './AboutForm'
import ProjectsForm from './ProjectsForm'
import SkillsForm from './SkillsForm'
import ExperienceForm from './ExperienceForm'
import ContactForm from './ContactForm'

const AddUserModal = ({ visible, onClose }) => {
  const { formik, loading } = useAddUserForm(onClose)

  return (
    <Modal
      title='Thêm User'
      open={visible}
      onCancel={onClose}
      footer={null}
      width={1600}
    >
      <form onSubmit={formik.handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={5}>
            <AboutForm formik={formik} />
          </Col>
          <Col span={5}>
            <ProjectsForm
              formik={formik}
              handleAddProject={formik.handleAddProject}
              handleRemoveProject={formik.handleRemoveProject}
            />
          </Col>
          <Col span={5}>
            <SkillsForm
              formik={formik}
              handleAddLanguage={formik.handleAddLanguage}
              handleRemoveLanguage={formik.handleRemoveLanguage}
            />
          </Col>
          <Col span={4}>
            <ExperienceForm formik={formik} />
          </Col>
          <Col span={5}>
            <ContactForm formik={formik} />
          </Col>
        </Row>
        <div style={{ textAlign: 'right', marginTop: 16 }}>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Hủy
          </Button>
          <Button type='primary' htmlType='submit' loading={loading}>
            Thêm
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddUserModal

