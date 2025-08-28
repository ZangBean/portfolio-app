import { Input, Select, DatePicker } from "antd";
import moment from "moment";

const AboutForm = ({ formik }) => {
  return (
    <div>
      <div>
        <label>
          Tên đăng nhập <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        )}
      </div>
      <div>
        <label>
          Mật khẩu <span style={{ color: "red" }}>*</span>
        </label>
        <Input.Password
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
      </div>
      <div>
        <label>Họ tên</label>
        <Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Vị trí</label>
        <Input
          name="position"
          value={formik.values.position}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Link ảnh</label>
        <Input
          name="image"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label>Ngày sinh</label>
        <DatePicker
          format="DD/MM/YY"
          value={
            formik.values.birth_date ? moment(formik.values.birth_date) : null
          }
          onChange={(date) => formik.setFieldValue("birth_date", date)}
        />
      </div>
      <div>
        <label>Giới tính</label>
        <Select
          value={formik.values.gender}
          onChange={(value) => formik.setFieldValue("gender", value)}
        >
          <Select.Option value="Male">Nam</Select.Option>
          <Select.Option value="Female">Nữ</Select.Option>
        </Select>
      </div>
      <div>
        <label>Mục tiêu nghề nghiệp</label>
        <Input.TextArea
          rows={4}
          name="target"
          value={formik.values.target}
          onChange={formik.handleChange}
        />
      </div>
    </div>
  );
};

export default AboutForm;
