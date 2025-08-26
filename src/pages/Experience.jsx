import { Row, Col, Typography, Card, List } from "antd";
import { useSelector } from "react-redux";

const { Title, Paragraph } = Typography;

export default function Experience() {
  const selectedUser = useSelector((state) => state.projects.selectedUser);
  const { status } = useSelector((state) => state.projects);

  return (
    <Row justify="center">
      <Col span={16}>
        <Title>Kinh nghiệm</Title>
        {selectedUser ? (
          <Card loading={status === "loading"}>
            <Paragraph>
              <strong>Công ty:</strong> {selectedUser.cv.experience.company}
            </Paragraph>
            <Paragraph>
              <strong>Website:</strong>{" "}
              <a
                href={selectedUser.cv.experience.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedUser.cv.experience.website}
              </a>
            </Paragraph>
            <Paragraph>
              <strong>Thời gian:</strong>{" "}
              {selectedUser.cv.experience.period.start} -{" "}
              {selectedUser.cv.experience.period.end}
            </Paragraph>
            <Paragraph>
              <strong>Mô tả:</strong>
            </Paragraph>
            <List
              dataSource={selectedUser.cv.experience.description}
              renderItem={(item) => <List.Item>- {item}</List.Item>}
            />
          </Card>
        ) : (
          <Paragraph>Đang tải...</Paragraph>
        )}
      </Col>
    </Row>
  );
}
