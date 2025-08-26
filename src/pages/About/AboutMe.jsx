import { useSelector } from "react-redux";
import {
  Container,
  HighlightNumber,
  HighlightText,
  ProfileCard,
  FeaturedWorkCard,
  SectionTitle,
} from "./About.styled";
import { Typography, Row, Col, Card } from "antd";
import HeaderUser from "../../components/common/Header/HeaderUser";

const { Title, Paragraph } = Typography;

export default function Home() {
  const selectedUser = useSelector((state) => state.projects.selectedUser);
  console.log(selectedUser);

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  const { personal_info, experience, projects, target } = selectedUser.cv;

  return (
    <Row gutter={16}>
      {/* Phần bên phải (content khác) */}
      <Col span={8}>
        <div
          style={{
            backgroundColor: "#111",
            minHeight: "100vh",
            padding: "2rem",
            color: "#fff",
          }}
        >
          {/* Đây là phần nội dung khác */}
          Right side content
        </div>
      </Col>

      {/* Phần bên trái (Home content) */}
      <Col span={16}>
        <HeaderUser />

        <Container>
          {/* Profile Info */}
          <ProfileCard>
            <SectionTitle level={3}>Digital Identity</SectionTitle>

            <Paragraph
              style={{
                color: "#fff",
              }}
            >
              {target}
            </Paragraph>
            <Paragraph>
              GitHub:{" "}
              <a href={personal_info.github} target="_blank">
                {personal_info.github}
              </a>
            </Paragraph>
          </ProfileCard>

          {/* Highlights */}
          <div style={{ marginTop: "2rem" }}>
            <Title level={3}>Highlights & Successes</Title>
            <Row gutter={16}>
              <Col span={8}>
                <HighlightNumber>
                  +{experience ? experience.description.length : 0}
                </HighlightNumber>
                <HighlightText>Experience Items</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>
                  +{projects ? projects.length : 0}
                </HighlightNumber>
                <HighlightText>Projects Completed</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>+10</HighlightNumber>
                <HighlightText>Certifications & Awards</HighlightText>
              </Col>
            </Row>
          </div>

          {/* Featured Work */}
          <div style={{ marginTop: "2rem" }}>
            <Title level={3}>Featured Work</Title>
            <Paragraph>A glimpse into my professional journey.</Paragraph>
            <Row gutter={16}>
              {projects &&
                projects.map((project, index) => (
                  <Col span={12} key={index} style={{ marginBottom: "1rem" }}>
                    <FeaturedWorkCard
                      cover={
                        <img
                          alt={project.title}
                          src={
                            project.image ||
                            "/mnt/data/f07cd432-05b6-4d81-be7b-de8ea2a96fa2.png"
                          }
                        />
                      }
                    >
                      <Card.Meta
                        title={project.title}
                        description={project.description}
                      />
                    </FeaturedWorkCard>
                  </Col>
                ))}
            </Row>
          </div>
        </Container>
      </Col>
    </Row>
  );
}
