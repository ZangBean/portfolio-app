import { Input, Select, DatePicker, Button, InputNumber } from "antd";
import moment from "moment";

const ProjectsForm = ({ formik, handleAddProject, handleRemoveProject }) => {
  return (
    <div>
      <div>
        <label>Dự án</label>
        {formik.values.projects.map((project, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ddd", padding: 16, marginBottom: 16 }}
          >
            <div>
              <label>Tên dự án</label>
              <Input
                value={project.title}
                onChange={(e) =>
                  formik.setFieldValue(
                    `projects[${index}].title`,
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>Thời gian bắt đầu</label>
              <DatePicker
                picker="month"
                format="MMMM YYYY"
                value={
                  project.period.start ? moment(project.period.start) : null
                }
                onChange={(date) =>
                  formik.setFieldValue(`projects[${index}].period.start`, date)
                }
              />
            </div>
            <div>
              <label>Thời gian kết thúc</label>
              <DatePicker
                picker="month"
                format="MMMM YYYY"
                value={project.period.end ? moment(project.period.end) : null}
                onChange={(date) =>
                  formik.setFieldValue(`projects[${index}].period.end`, date)
                }
              />
            </div>
            <div>
              <label>Ngôn ngữ lập trình</label>
              <Select
                mode="tags"
                value={project.languages}
                onChange={(value) =>
                  formik.setFieldValue(`projects[${index}].languages`, value)
                }
                placeholder="Nhập ngôn ngữ (VD: HTML)"
              />
            </div>
            <div>
              <label>Framework</label>
              <Select
                mode="tags"
                value={project.frameworks}
                onChange={(value) =>
                  formik.setFieldValue(`projects[${index}].frameworks`, value)
                }
                placeholder="Nhập framework (VD: WordPress)"
              />
            </div>
            <div>
              <label>Database</label>
              <Input
                value={project.database}
                onChange={(e) =>
                  formik.setFieldValue(
                    `projects[${index}].database`,
                    e.target.value
                  )
                }
                placeholder="Nhập database (VD: SQL Server)"
              />
            </div>
            <div>
              <label>Mô tả dự án</label>
              <Input.TextArea
                rows={3}
                value={project.description}
                onChange={(e) =>
                  formik.setFieldValue(
                    `projects[${index}].description`,
                    e.target.value
                  )
                }
              />
            </div>
            <div>
              <label>Chức năng chính</label>
              <Select
                mode="tags"
                value={project.main_functions}
                onChange={(value) =>
                  formik.setFieldValue(
                    `projects[${index}].main_functions`,
                    value
                  )
                }
                placeholder="Nhập chức năng chính"
              />
            </div>
            <div>
              <label>Link ảnh dự án</label>
              <Input
                value={project.image}
                onChange={(e) =>
                  formik.setFieldValue(
                    `projects[${index}].image`,
                    e.target.value
                  )
                }
              />
            </div>
            <Button onClick={() => handleRemoveProject(index)}>
              Xóa dự án
            </Button>
          </div>
        ))}
        <Button onClick={handleAddProject}>Thêm dự án</Button>
      </div>
      <div>
        <label>Số dự án đã hoàn thành</label>
        <InputNumber
          min={0}
          value={formik.values.projects_completed}
          onChange={(value) =>
            formik.setFieldValue("projects_completed", value)
          }
        />
      </div>
      <div>
        <label>Số chứng chỉ/ giải thưởng</label>
        <InputNumber
          min={0}
          value={formik.values.certifications_awards}
          onChange={(value) =>
            formik.setFieldValue("certifications_awards", value)
          }
        />
      </div>
    </div>
  );
};

export default ProjectsForm;
