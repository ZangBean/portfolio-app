import { Input } from "antd";

const ContactForm = ({ formik }) => {
  return (
    <div>
      <div>
        <label>Email</label>
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label>Số điện thoại</label>
        <Input
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>GitHub</label>
        <Input
          name="github"
          value={formik.values.github}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Địa chỉ</label>
        <Input
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Link ảnh GitHub</label>
        <Input
          name="github_image"
          value={formik.values.github_image}
          onChange={formik.handleChange}
        />
      </div>
    </div>
  );
};

export default ContactForm;
