import { Row, Col, Typography, Card, List, Spin } from "antd";
import useUserDetail from "../hooks/useUserDetail";

const { Title, Paragraph } = Typography;

export default function Experience() {
  const { selectedUser, status, error } = useUserDetail();

  if (status === "loading" && !selectedUser) {
    return <Spin style={{ display: "block", margin: "50px auto" }} />;
  }

  if (error) {
    return <Paragraph style={{ color: "red" }}>Lỗi: {error}</Paragraph>;
  }

  if (!selectedUser) {
    return <Paragraph>Không tìm thấy người dùng</Paragraph>;
  }

  const experience = selectedUser.cv?.experience || {};
  const description = experience.description || [];

  return (
    <Row justify="center">
      <Col span={16}>
        <Title level={2}>Kinh nghiệm</Title>
        <Card>
          <Paragraph>
            <strong>Công ty:</strong> {experience.company || "N/A"}
          </Paragraph>
          <Paragraph>
            <strong>Website:</strong>{" "}
            {experience.website ? (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.website}
              </a>
            ) : (
              "N/A"
            )}
          </Paragraph>
          <Paragraph>
            <strong>Thời gian:</strong> {experience.period?.start || "N/A"} -{" "}
            {experience.period?.end || "N/A"}
          </Paragraph>
          <Paragraph>
            <strong>Mô tả:</strong>
          </Paragraph>
          <List
            dataSource={description}
            renderItem={(item, index) => (
              <List.Item key={index}>- {item}</List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
}
