import { Input, Form } from "antd";
import { TitleH3 } from "../UI/Title";

const ProjectsForm = ({ formik }) => {
  return (
    <>
      <TitleH3 level={4}>Projects</TitleH3>
      <Form layout="vertical">
        <Form.Item label="Project Name" required>
          <Input
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Description">
          <Input.TextArea
            rows={2}
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Project Link">
          <Input
            name="link"
            value={formik.values.link}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Image" hidden>
          <Input
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default ProjectsForm;
