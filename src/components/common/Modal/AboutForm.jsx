import { Input, Select, DatePicker, Form } from 'antd'
import moment from 'moment'

const AboutForm = ({ formik }) => {
  return (
    <Form layout='vertical'>
      <Form.Item
        label='Tên đăng nhập'
        required
        validateStatus={
          formik.touched.username && formik.errors.username ? 'error' : ''
        }
        help={formik.touched.username && formik.errors.username}
      >
        <Input
          name='username'
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label='Mật khẩu'
        required
        validateStatus={
          formik.touched.password && formik.errors.password ? 'error' : ''
        }
        help={formik.touched.password && formik.errors.password}
      >
        <Input.Password
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item label='Họ tên'>
        <Input
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label='Vị trí'>
        <Input
          name='position'
          value={formik.values.position}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label='Link ảnh'>
        <Input
          name='image'
          value={formik.values.image}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label='Ngày sinh'>
        <DatePicker
          format='DD/MM/YY'
          style={{ width: '100%' }}
          value={
            formik.values.birth_date ? moment(formik.values.birth_date) : null
          }
          onChange={(date) => formik.setFieldValue('birth_date', date)}
        />
      </Form.Item>

      <Form.Item label='Giới tính'>
        <Select
          value={formik.values.gender}
          onChange={(value) => formik.setFieldValue('gender', value)}
        >
          <Select.Option value='Male'>Nam</Select.Option>
          <Select.Option value='Female'>Nữ</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label='Mục tiêu nghề nghiệp'>
        <Input.TextArea
          rows={2}
          name='target'
          value={formik.values.target}
          onChange={formik.handleChange}
        />
      </Form.Item>
    </Form>
  )
}

export default AboutForm

