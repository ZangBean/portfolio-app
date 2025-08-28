import { Modal, Form, Input, Select, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction } from "../../../stores/screens/user/user.action";

const AddUserModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      cv: {
        ...values.cv,
        personal_info: {
          ...values.personal_info,
          birth_date: values.personal_info.birth_date.format("DD/MM/YY"),
        },
      },
    };
    dispatch(createUserAction(formattedValues)).then(() => {
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal title="Thêm User" open={visible} onCancel={onClose} footer={null}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name={["login", "username"]}
          label="Tên đăng nhập"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["login", "password"]}
          label="Mật khẩu"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "name"]}
          label="Họ tên"
          rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "position"]}
          label="Vị trí"
          rules={[{ required: true, message: "Vui lòng nhập vị trí" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "image"]}
          label="Link ảnh"
          rules={[{ required: true, message: "Vui lòng nhập link ảnh" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "birth_date"]}
          label="Ngày sinh"
          rules={[{ required: true, message: "Vui lòng chọn ngày sinh" }]}
        >
          <DatePicker format="DD/MM/YY" />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "gender"]}
          label="Giới tính"
          rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
        >
          <Select>
            <Select.Option value="Male">Nam</Select.Option>
            <Select.Option value="Female">Nữ</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "phone"]}
          label="Số điện thoại"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "email"]}
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Vui lòng nhập email hợp lệ",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "github"]}
          label="GitHub"
          rules={[{ required: true, message: "Vui lòng nhập link GitHub" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "location"]}
          label="Địa chỉ"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["cv", "personal_info", "github_image"]}
          label="Link ảnh GitHub"
          rules={[{ required: true, message: "Vui lòng nhập link ảnh GitHub" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Thêm
          </Button>
          <Button onClick={onClose} style={{ marginLeft: 8 }}>
            Hủy
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
