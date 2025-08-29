import { Input, Form } from "antd";
import { TitleH3 } from "../UI/Title";

const ContactForm = ({ formik }) => {
  return (
    <>
      <TitleH3 level={4}>Contact</TitleH3>
      <Form layout="vertical">
        <Form.Item label="Email" required>
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Phone Number">
          <Input
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Address">
          <Input
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Facebook">
          <Input
            name="facebook"
            value={formik.values.facebook}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="LinkedIn" hidden>
          <Input
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Github">
          <Input
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactForm;
