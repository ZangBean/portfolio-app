import { useSelector } from "react-redux";
import { List, Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Projects() {
  const { selectedUser, status } = useSelector((state) => state.projects);

  return (
    <div>
      <Title>Dự án</Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={selectedUser ? selectedUser.cv.projects : []}
        loading={status === "loading"}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <Paragraph>
                <strong>Thời gian:</strong> {item.period.start} -{" "}
                {item.period.end}
              </Paragraph>
              <Paragraph>
                <strong>Mô tả:</strong> {item.description}
              </Paragraph>
              <Paragraph>
                <strong>Công nghệ:</strong> {item.languages.join(", ")}
              </Paragraph>
              {item.frameworks && (
                <Paragraph>
                  <strong>Framework:</strong> {item.frameworks.join(", ")}
                </Paragraph>
              )}
              {item.database && (
                <Paragraph>
                  <strong>Cơ sở dữ liệu:</strong> {item.database}
                </Paragraph>
              )}
              <Paragraph>
                <strong>Chức năng chính:</strong>
              </Paragraph>
              <ul>
                {item.main_functions.map((func, index) => (
                  <li key={index}>{func}</li>
                ))}
              </ul>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
