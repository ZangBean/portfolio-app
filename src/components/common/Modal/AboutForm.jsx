import { Input, Select, DatePicker, Form } from "antd";
import moment from "moment";
import { TitleH3 } from "../UI/Title";

const AboutForm = ({ formik }) => {
  return (
    <>
      <TitleH3 level={4}>Basic Information</TitleH3>
      <Form layout="vertical">
        <Form.Item
          label="Username"
          required
          validateStatus={
            formik.touched.username && formik.errors.username ? "error" : ""
          }
          help={formik.touched.username && formik.errors.username}
        >
          <Input
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          required
          validateStatus={
            formik.touched.password && formik.errors.password ? "error" : ""
          }
          help={formik.touched.password && formik.errors.password}
        >
          <Input.Password
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item label="Full Name">
          <Input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Position" hidden>
          <Input
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Image URL" hidden>
          <Input
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Date of Birth">
          <DatePicker
            format="DD/MM/YY"
            style={{ width: "100%" }}
            value={
              formik.values.birth_date ? moment(formik.values.birth_date) : null
            }
            onChange={(date) => formik.setFieldValue("birth_date", date)}
          />
        </Form.Item>

        <Form.Item label="Gender">
          <Select
            value={formik.values.gender}
            onChange={(value) => formik.setFieldValue("gender", value)}
          >
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Career Goal" hidden>
          <Input.TextArea
            rows={2}
            name="target"
            value={formik.values.target}
            onChange={formik.handleChange}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default AboutForm;
