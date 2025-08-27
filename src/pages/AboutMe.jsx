import { Typography, Row, Col } from "antd";
import { FaRegStar, FaRegFolderOpen } from "react-icons/fa";
import Container from "../components/common/UI/Container";
import FeaturedWorkCard from "../components/common/UI/FeaturedWorkCard";
import HighlightNumber from "../components/common/UI/HighlightNumber";
import HighlightText from "../components/common/UI/HighlightText";
import SectionTitle from "../components/common/UI/SectionTitle";
import CardProfile from "../components/CardProfile";
import Loading from "../components/Loading";
import useUserDetail from "../hooks/useUserDetail";

const { Paragraph } = Typography;

export default function AboutMe() {
  const { selectedUser, status, error } = useUserDetail();

  if (status === "loading" && !selectedUser) return <Loading />;
  if (error)
    return <Paragraph style={{ color: "red" }}>Error: {error}</Paragraph>;
  if (!selectedUser) return <Paragraph>Không tìm thấy người dùng</Paragraph>;

  const {
    personal_info = {},
    experience = {},
    projects = [],
    target = "",
    certifications_awards = 0,
    image = "",
  } = selectedUser.cv || {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        maxWidth: "1000px",
      }}
    >
      <Row gutter={16}>

        {/* Phần bên phải (content khác) */}
        <Col span={6}>
          <CardProfile personal_info={personal_info} />
        </Col>
        {/* Phần bên trái (Home content) */}

        <Col span={16}>
          <Container>
            {/* Digital Identity */}
            <SectionTitle level={3}>Digital Identity</SectionTitle>
            <Paragraph style={{ color: "#fff" }}>{target}</Paragraph>

            {/* Highlights */}
            <div style={{ marginTop: "2rem" }}>
              <SectionTitle level={3}>
                <FaRegStar style={{ marginRight: "8px" }} />
                Highlights & Successes
              </SectionTitle>
              <Row gutter={16}>
                <Col span={8}>
                  <HighlightNumber>
                    +{experience?.description?.length || 0}
                  </HighlightNumber>
                  <HighlightText>YEARS OF EXPERIENCE</HighlightText>
                </Col>
                <Col span={8}>
                  <HighlightNumber>+{projects.length}</HighlightNumber>
                  <HighlightText>PROJECTS COMPLETED</HighlightText>
                </Col>
                <Col span={8}>
                  <HighlightNumber>
                    +{certifications_awards || 10}
                  </HighlightNumber>
                  <HighlightText>CERTIFICATIONS & AWARDS</HighlightText>
                </Col>
              </Row>
            </div>

            {/* Featured Work */}
            <div style={{ marginTop: "2rem" }}>
              <SectionTitle level={3}>
                <FaRegFolderOpen style={{ marginRight: "8px" }} />
                Featured Work
              </SectionTitle>
              <Paragraph style={{ color: "#fff" }}>
                A glimpse into my professional journey.
              </Paragraph>
              <Row gutter={16}>
                {projects.map((project, index) => (
                  <Col span={12} key={index} style={{ marginBottom: "1rem" }}>
                    <FeaturedWorkCard
                      cover={
                        <img
                          alt={project.title}
                          src={
                            project.image ||
                            "https://picsum.photos/200/200?grayscale"
                          }
                        />
                      }
                    >
                      <div style={{ color: "#fff", minHeight: "150px" }}>
                        <strong>{project.title}</strong>
                        <p>{project.description}</p>
                      </div>
                    </FeaturedWorkCard>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
