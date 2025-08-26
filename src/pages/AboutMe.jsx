import { Typography, Row, Col, Avatar, Card } from "antd";
import { useSelector } from "react-redux";

const { Title, Paragraph } = Typography;

export default function Home() {
  const selectedUser = useSelector((state) => state.projects.selectedUser);

  return (
    <Row justify="center">
      <Col span={16}>
        <Title>Thông tin cá nhân</Title>
        {selectedUser ? (
          <Card>
            <Row gutter={16}>
              <Col>
                <Avatar size={100} src={selectedUser.cv.personal_info.image} />
              </Col>
              <Col>
                <Paragraph>
                  <strong>Họ tên:</strong> {selectedUser.cv.personal_info.name}
                </Paragraph>
                <Paragraph>
                  <strong>Vị trí:</strong>{" "}
                  {selectedUser.cv.personal_info.position}
                </Paragraph>
                <Paragraph>
                  <strong>Ngày sinh:</strong>{" "}
                  {selectedUser.cv.personal_info.birth_date}
                </Paragraph>
                <Paragraph>
                  <strong>Giới tính:</strong>{" "}
                  {selectedUser.cv.personal_info.gender}
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong> {selectedUser.cv.personal_info.email}
                </Paragraph>
                <Paragraph>
                  <strong>Điện thoại:</strong>{" "}
                  {selectedUser.cv.personal_info.phone}
                </Paragraph>
                <Paragraph>
                  <strong>Github:</strong>{" "}
                  <a
                    href={selectedUser.cv.personal_info.github}
                    target="_blank"
                  >
                    {selectedUser.cv.personal_info.github}
                  </a>
                </Paragraph>
                <Paragraph>
                  <strong>Địa chỉ:</strong>{" "}
                  {selectedUser.cv.personal_info.location}
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
