import { Row, Col, Typography, Card, List } from "antd";
import { useSelector } from "react-redux";

const { Title, Paragraph } = Typography;

export default function Skills() {
  const selectedUser = useSelector((state) => state.projects.selectedUser);
  const { status } = useSelector((state) => state.projects);

  return (
    <Row justify="center">
      <Col span={16}>
        <Title>Kỹ năng</Title>
        {selectedUser ? (
          <Card loading={status === "loading"}>
            <Paragraph>
              <strong>Kỹ năng Frontend:</strong>{" "}
              {selectedUser.cv.skills.frontend.join(", ")}
            </Paragraph>
            <Paragraph>
              <strong>Kỹ năng Backend:</strong>{" "}
              {selectedUser.cv.skills.backend.join(", ")}
            </Paragraph>
            <Paragraph>
              <strong>Cơ sở dữ liệu:</strong>{" "}
              {selectedUser.cv.skills.database.join(", ")}
            </Paragraph>
            <Paragraph>
              <strong>Khác:</strong> {selectedUser.cv.skills.other.join(", ")}
            </Paragraph>
            <Paragraph>
              <strong>Ngôn ngữ:</strong>
            </Paragraph>
            <List
              dataSource={selectedUser.cv.languages}
              renderItem={(item) => (
                <List.Item>
                  {item.language}: {item.level}
                </List.Item>
              )}
            />
          </Card>
        ) : (
          <Paragraph>Đang tải...</Paragraph>
        )}
      </Col>
    </Row>
  );
}
