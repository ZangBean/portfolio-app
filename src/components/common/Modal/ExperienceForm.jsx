import { Input, DatePicker, Form } from "antd";
import moment from "moment";
import { TitleH3 } from "../UI/Title";

const ExperienceForm = ({ formik }) => {
  return (
    <>
      <TitleH3 level={4}>Experience</TitleH3>
      <Form layout="vertical">
        <Form.Item label="Company Name" required>
          <Input
            name="company"
            value={formik.values.company}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Position">
          <Input
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Start Date">
          <DatePicker
            style={{ width: "100%" }}
            value={
              formik.values.start_date ? moment(formik.values.start_date) : null
            }
            onChange={(date) => formik.setFieldValue("start_date", date)}
          />
        </Form.Item>

        <Form.Item label="End Date">
          <DatePicker
            style={{ width: "100%" }}
            value={
              formik.values.end_date ? moment(formik.values.end_date) : null
            }
            onChange={(date) => formik.setFieldValue("end_date", date)}
          />
        </Form.Item>

        <Form.Item label="Job Description">
          <Input.TextArea
            rows={2}
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default ExperienceForm;
