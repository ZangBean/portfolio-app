import { Input, DatePicker, Form } from 'antd'
import moment from 'moment'

const ExperienceForm = ({ formik }) => {
  return (
    <Form layout='vertical'>
      <Form.Item label='Tên công ty' required>
        <Input
          name='company'
          value={formik.values.company}
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

      <Form.Item label='Thời gian bắt đầu'>
        <DatePicker
          style={{ width: '100%' }}
          value={
            formik.values.start_date ? moment(formik.values.start_date) : null
          }
          onChange={(date) => formik.setFieldValue('start_date', date)}
        />
      </Form.Item>

      <Form.Item label='Thời gian kết thúc'>
        <DatePicker
          style={{ width: '100%' }}
          value={formik.values.end_date ? moment(formik.values.end_date) : null}
          onChange={(date) => formik.setFieldValue('end_date', date)}
        />
      </Form.Item>

      <Form.Item label='Mô tả công việc'>
        <Input.TextArea
          rows={4}
          name='description'
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </Form.Item>
    </Form>
  )
}

export default ExperienceForm

