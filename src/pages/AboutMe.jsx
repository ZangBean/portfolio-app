import { Typography, Row, Col, Avatar, Card } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function AboutMe() {
  const { id } = useParams();
  const selectedUser = useSelector((state) => state.projects.selectedUser);
  const user = selectedUser.find((u) => u.id === id);
  if (!user) {
    return <Layout>User not found</Layout>;
  }

  return (
    <Row justify="center">
      <Col span={16}>
        <Title>Thông tin cá nhân</Title>
        {user ? (
          <Card>
            <Row gutter={16}>
              <Col>
                <Avatar size={100} src={user.cv.personal_info.image} />
              </Col>
              <Col>
                <Paragraph>
                  <strong>Họ tên:</strong> {user.cv.personal_info.name}
                </Paragraph>
                <Paragraph>
                  <strong>Vị trí:</strong> {user.cv.personal_info.position}
                </Paragraph>
                <Paragraph>
                  <strong>Ngày sinh:</strong> {user.cv.personal_info.birth_date}
                </Paragraph>
                <Paragraph>
                  <strong>Giới tính:</strong> {user.cv.personal_info.gender}
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong> {user.cv.personal_info.email}
                </Paragraph>
                <Paragraph>
                  <strong>Điện thoại:</strong> {user.cv.personal_info.phone}
                </Paragraph>
                <Paragraph>
                  <strong>Github:</strong>{" "}
                  <a href={user.cv.personal_info.github} target="_blank">
                    {user.cv.personal_info.github}
                  </a>
                </Paragraph>
                <Paragraph>
                  <strong>Địa chỉ:</strong> {user.cv.personal_info.location}
                </Paragraph>
                <Paragraph>
                  <strong>Mục tiêu:</strong> {selectedUser.cv.target}
                </Paragraph>
              </Col>
            </Row>
          </Card>
        ) : (
          <Paragraph>Đang tải...</Paragraph>
        )}
      </Col>
    </Row>
  );
}
