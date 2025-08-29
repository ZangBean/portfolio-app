import { Input, Form } from 'antd'
import { Title } from '../../../pages/Home/Home.styled'

const ProjectsForm = ({ formik }) => {
  return (
    <>
      <Title level={4}>Projects</Title>
      <Form layout='vertical'>
        <Form.Item label='Tên dự án' required>
          <Input
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label='Mô tả'>
          <Input.TextArea
            rows={2}
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label='Link dự án'>
          <Input
            name='link'
            value={formik.values.link}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label='Ảnh minh họa' hidden>
          <Input
            name='image'
            value={formik.values.image}
            onChange={formik.handleChange}
          />
        </Form.Item>
      </Form>
    </>
  )
}

export default ProjectsForm

