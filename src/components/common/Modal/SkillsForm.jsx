import { Input, Select, Button, Row, Col, Form, Space } from 'antd'
import SectionTitle from '../UI/SectionTitle'
import { Title } from '../../../pages/Home/Home.styled'

const SkillsForm = ({ formik, handleAddLanguage, handleRemoveLanguage }) => {
  return (
    <>
      <Title level={6}>Project</Title>

      <Form layout='vertical'>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label='Kỹ năng Frontend'>
              <Select
                mode='tags'
                value={formik.values.skills.frontend}
                onChange={(value) =>
                  formik.setFieldValue('skills.frontend', value)
                }
                placeholder='Nhập kỹ năng frontend (VD: HTML, CSS)'
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label='Kỹ năng Backend'>
              <Select
                mode='tags'
                value={formik.values.skills.backend}
                onChange={(value) =>
                  formik.setFieldValue('skills.backend', value)
                }
                placeholder='Nhập kỹ năng backend (VD: PHP, Java)'
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label='Kỹ năng Database'>
              <Select
                mode='tags'
                value={formik.values.skills.database}
                onChange={(value) =>
                  formik.setFieldValue('skills.database', value)
                }
                placeholder='Nhập kỹ năng database (VD: SQL Server)'
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label='Kỹ năng khác'>
              <Select
                mode='tags'
                value={formik.values.skills.other}
                onChange={(value) =>
                  formik.setFieldValue('skills.other', value)
                }
                placeholder='Nhập kỹ năng khác (VD: GitHub)'
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label='Ngôn ngữ'>
          {formik.values.languages.map((lang, index) => (
            <Row key={index} gutter={8} style={{ marginBottom: 8 }}>
              <Col span={10}>
                <Input
                  placeholder='Ngôn ngữ (VD: Japanese)'
                  value={lang.language}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `languages[${index}].language`,
                      e.target.value
                    )
                  }
                />
              </Col>
              <Col span={10}>
                <Input
                  placeholder='Trình độ (VD: N5+)'
                  value={lang.level}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `languages[${index}].level`,
                      e.target.value
                    )
                  }
                />
              </Col>
              <Col span={4}>
                <Button danger onClick={() => handleRemoveLanguage(index)}>
                  Xóa
                </Button>
              </Col>
            </Row>
          ))}
          <Button type='dashed' onClick={handleAddLanguage} block>
            + Thêm ngôn ngữ
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default SkillsForm

