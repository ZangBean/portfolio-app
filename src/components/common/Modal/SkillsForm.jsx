import { Input, Select, Button, Row, Col, Form } from "antd";
import { TitleH3 } from "../UI/Title";

const SkillsForm = ({ formik, handleAddLanguage, handleRemoveLanguage }) => {
  return (
    <>
      <TitleH3 level={4}>Skills</TitleH3>

      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Frontend Skills">
              <Select
                mode="tags"
                value={formik.values.skills.frontend}
                onChange={(value) =>
                  formik.setFieldValue("skills.frontend", value)
                }
                placeholder="Enter frontend skills (e.g., HTML, CSS)"
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Backend Skills">
              <Select
                mode="tags"
                value={formik.values.skills.backend}
                onChange={(value) =>
                  formik.setFieldValue("skills.backend", value)
                }
                placeholder="Enter backend skills (e.g., PHP, Java)"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Database Skills">
              <Select
                mode="tags"
                value={formik.values.skills.database}
                onChange={(value) =>
                  formik.setFieldValue("skills.database", value)
                }
                placeholder="Enter database skills (e.g., SQL Server)"
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Other Skills">
              <Select
                mode="tags"
                value={formik.values.skills.other}
                onChange={(value) =>
                  formik.setFieldValue("skills.other", value)
                }
                placeholder="Enter other skills (e.g., GitHub)"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Languages">
          {formik.values.languages.map((lang, index) => (
            <Row key={index} gutter={8} style={{ marginBottom: 8 }}>
              <Col span={10}>
                <Input
                  placeholder="Language (e.g., Japanese)"
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
                  placeholder="Level (e.g., N5+)"
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
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button type="dashed" onClick={handleAddLanguage} block>
            + Add Language
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SkillsForm;
