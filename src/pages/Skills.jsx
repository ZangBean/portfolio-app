import { Row, Col, Tag } from "antd";
import CardProfile from "../components/CardProfile";
import Container from "../components/common/UI/Container";
import SectionTitle from "../components/common/UI/SectionTitle";
import Loading from "../components/Loading";
import FeaturedWorkCard from "../components/common/UI/FeaturedWorkCard";
import useUserDetail from "../hooks/useUserDetail";
import FlexBox from "../components/common/UI/Flexbox";
import DescriptionCard from "../components/common/UI/DescriptionCard";
import DarkCard from "../components/common/UI/DarkCard";
import MarginTop from "../components/common/UI/MarginTop";
import ParagraphStyled from "../components/common/UI/ParagraphStyled";

const Skills = () => {
  const { selectedUser, status, error } = useUserDetail();

  if (status === "loading" && !selectedUser) {
    return <Loading />;
  }

  if (error || !selectedUser) {
    return <ParagraphStyled color="red">Error: {error}</ParagraphStyled>;
  }

  const {
    personal_info,
    skills = {},
    projects = [],
    target = "",
    languages = [],
  } = selectedUser.cv || {};

  return (
    <FlexBox>
      <Col span={6}>
        <CardProfile personal_info={personal_info} />
      </Col>

      <Col span={16}>
        <Container>
          <SectionTitle level={3}>Skills</SectionTitle>

          <ParagraphStyled color="#fff">
            {target || "No career goal set"}
          </ParagraphStyled>

          {languages.length > 0 && (
            <MarginTop mt="2rem">
              <SectionTitle level={3}>Languages</SectionTitle>
              {languages.map((lang, i) => (
                <Tag
                  key={i}
                  color="blue"
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    width: "fit-content",
                  }}
                >
                  {lang.language} ({lang.level})
                </Tag>
              ))}
            </MarginTop>
          )}

          {skills && Object.keys(skills).length > 0 && (
            <MarginTop mt="2rem">
              <SectionTitle level={3}>Technical Skills</SectionTitle>
              <Row gutter={16}>
                {Object.entries(skills).map(([key, list]) => (
                  <Col span={12} key={key}>
                    <DarkCard title={key.toUpperCase()} variant={false}>
                      {list && list.length > 0 ? (
                        list.map((item, idx) => <p key={idx}>• {item}</p>)
                      ) : (
                        <p>• No skills listed</p>
                      )}
                    </DarkCard>
                  </Col>
                ))}
              </Row>
            </MarginTop>
          )}

          {projects.length > 0 && (
            <MarginTop mt="2rem">
              <SectionTitle level={3}>Featured Work</SectionTitle>
              <ParagraphStyled color="#fff">
                A glimpse into my professional journey.
              </ParagraphStyled>
              <Row gutter={16}>
                {projects.map((project, index) => (
                  <Col span={12} key={index}>
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
                      <DescriptionCard>
                        <strong>{project.title}</strong>
                        <p>
                          {project.description || "No description available"}
                        </p>
                      </DescriptionCard>
                    </FeaturedWorkCard>
                  </Col>
                ))}
              </Row>
            </MarginTop>
          )}
        </Container>
      </Col>
    </FlexBox>
  );
};

export default Skills;
