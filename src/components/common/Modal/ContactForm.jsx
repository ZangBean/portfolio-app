import { Input, Form } from 'antd'

const ContactForm = ({ formik }) => {
  return (
    <Form layout='vertical'>
      <Form.Item label='Email' required>
        <Input
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label='Số điện thoại'>
        <Input
          name='phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label='Địa chỉ'>
        <Input
          name='address'
          value={formik.values.address}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label='Facebook'>
        <Input
          name='facebook'
          value={formik.values.facebook}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label='LinkedIn'>
        <Input
          name='linkedin'
          value={formik.values.linkedin}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label='Github'>
        <Input
          name='github'
          value={formik.values.github}
          onChange={formik.handleChange}
        />
      </Form.Item>
    </Form>
  )
}

export default ContactForm

