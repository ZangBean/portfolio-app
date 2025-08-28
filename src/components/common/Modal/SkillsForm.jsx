import { Input, Select, Button, Row, Col } from "antd";

const SkillsForm = ({ formik, handleAddLanguage, handleRemoveLanguage }) => {
  return (
    <div>
      <div>
        <label>Kỹ năng Frontend</label>
        <Select
          mode="tags"
          value={formik.values.skills.frontend}
          onChange={(value) => formik.setFieldValue("skills.frontend", value)}
          placeholder="Nhập kỹ năng frontend (VD: HTML, CSS)"
        />
      </div>
      <div>
        <label>Kỹ năng Backend</label>
        <Select
          mode="tags"
          value={formik.values.skills.backend}
          onChange={(value) => formik.setFieldValue("skills.backend", value)}
          placeholder="Nhập kỹ năng backend (VD: PHP, Java)"
        />
      </div>
      <div>
        <label>Kỹ năng Database</label>
        <Select
          mode="tags"
          value={formik.values.skills.database}
          onChange={(value) => formik.setFieldValue("skills.database", value)}
          placeholder="Nhập kỹ năng database (VD: SQL Server)"
        />
      </div>
      <div>
        <label>Kỹ năng khác</label>
        <Select
          mode="tags"
          value={formik.values.skills.other}
          onChange={(value) => formik.setFieldValue("skills.other", value)}
          placeholder="Nhập kỹ năng khác (VD: GitHub)"
        />
      </div>
      <div>
        <label>Ngôn ngữ</label>
        {formik.values.languages.map((lang, index) => (
          <Row key={index} gutter={8} style={{ marginBottom: 8 }}>
            <Col span={10}>
              <Input
                placeholder="Ngôn ngữ (VD: Japanese)"
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
                placeholder="Trình độ (VD: N5+)"
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
              <Button onClick={() => handleRemoveLanguage(index)}>Xóa</Button>
            </Col>
          </Row>
        ))}
        <Button onClick={handleAddLanguage}>Thêm ngôn ngữ</Button>
      </div>
    </div>
  );
};

export default SkillsForm;
