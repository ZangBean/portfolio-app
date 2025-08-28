import { Input, Select, DatePicker, InputNumber } from "antd";
import moment from "moment";

const ExperienceForm = ({ formik }) => {
  return (
    <div>
      <div>
        <label>Trường học</label>
        <Input
          name="education.institution"
          value={formik.values.education.institution}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Khoa</label>
        <Input
          name="education.faculty"
          value={formik.values.education.faculty}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Chuyên ngành</label>
        <Input
          name="education.major"
          value={formik.values.education.major}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Thời gian bắt đầu học</label>
        <DatePicker
          picker="month"
          format="MMMM YYYY"
          value={
            formik.values.education.period.start
              ? moment(formik.values.education.period.start)
              : null
          }
          onChange={(date) =>
            formik.setFieldValue("education.period.start", date)
          }
        />
      </div>
      <div>
        <label>Thời gian kết thúc học</label>
        <DatePicker
          picker="month"
          format="MMMM YYYY"
          value={
            formik.values.education.period.end
              ? moment(formik.values.education.period.end)
              : null
          }
          onChange={(date) =>
            formik.setFieldValue("education.period.end", date)
          }
        />
      </div>
      <div>
        <label>Công ty</label>
        <Input
          name="experience.company"
          value={formik.values.experience.company}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Website công ty</label>
        <Input
          name="experience.website"
          value={formik.values.experience.website}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Thời gian bắt đầu làm</label>
        <DatePicker
          picker="month"
          format="MMMM YYYY"
          value={
            formik.values.experience.period.start
              ? moment(formik.values.experience.period.start)
              : null
          }
          onChange={(date) =>
            formik.setFieldValue("experience.period.start", date)
          }
        />
      </div>
      <div>
        <label>Thời gian kết thúc làm</label>
        <DatePicker
          picker="month"
          format="MMMM YYYY"
          value={
            formik.values.experience.period.end
              ? moment(formik.values.experience.period.end)
              : null
          }
          onChange={(date) =>
            formik.setFieldValue("experience.period.end", date)
          }
        />
      </div>
      <div>
        <label>Mô tả công việc</label>
        <Select
          mode="tags"
          value={formik.values.experience.description}
          onChange={(value) =>
            formik.setFieldValue("experience.description", value)
          }
          placeholder="Nhập mô tả công việc"
        />
      </div>
      <div>
        <label>Số năm kinh nghiệm</label>
        <InputNumber
          min={0}
          step={0.1}
          value={formik.values.experience.years_of_experience}
          onChange={(value) =>
            formik.setFieldValue("experience.years_of_experience", value)
          }
        />
      </div>
    </div>
  );
};

export default ExperienceForm;
