import { Row, Col, Typography, Card, Tag, Timeline } from "antd";
import CardProfile from "../components/CardProfile";
import Container from "../components/common/UI/Container";
import SectionTitle from "../components/common/UI/SectionTitle";
import HighlightNumber from "../components/common/UI/HighlightNumber";
import HighlightText from "../components/common/UI/HighlightText";
import useUserDetail from "../hooks/useUserDetail";
import FlexBox from "../components/common/UI/Flexbox";
import DarkCard from "../components/common/UI/DarkCard";
import MarginTop from "../components/common/UI/MarginTop";
import ParagraphStyled from "../components/common/UI/ParagraphStyled";
import TimelineStyled from "../components/common/UI/TimelineStyled";
import Loading from "../components/Loading";

const Experience = () => {
  const { selectedUser, status, error } = useUserDetail();

  if (status === "loading" && !selectedUser) {
    return <Loading />;
  }

  if (error || !selectedUser) {
    return <ParagraphStyled color="red">Lỗi: {error}</ParagraphStyled>;
  }

  const {
    personal_info,
    projects,
    target,
    certifications_awards,
    projects_completed,
    education,
    skills,
    experience,
  } = selectedUser.cv || {};

  const experiences = Array.isArray(experience)
    ? experience
    : [experience].filter(Boolean); // Loại bỏ undefined/null

  return (
    <FlexBox>
      <Col span={6}>
        <CardProfile
          personal_info={personal_info}
          selectedUser={selectedUser}
        />
      </Col>
      <Col span={16}>
        <Container>
          <SectionTitle level={3}>Career Snapshot</SectionTitle>
          <ParagraphStyled color="#fff">
            {target || "Chưa có mục tiêu nghề nghiệp"}
          </ParagraphStyled>
          <MarginTop mt="2rem">
            <SectionTitle level={3}>Highlights & Successes</SectionTitle>
            <Row gutter={16}>
              <Col span={8}>
                <HighlightNumber>
                  +
                  {experience && Array.isArray(experience)
                    ? experience.reduce(
                        (sum, exp) => sum + (exp?.years_of_experience || 0),
                        0
                      )
                    : experience?.years_of_experience || 0}
                </HighlightNumber>
                <HighlightText>YEARS OF EXPERIENCE</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>
                  +{projects_completed || projects?.length || 0}
                </HighlightNumber>
                <HighlightText>PROJECTS COMPLETED</HighlightText>
              </Col>
              <Col span={8}>
                <HighlightNumber>+{certifications_awards || 0}</HighlightNumber>
                <HighlightText>CERTIFICATIONS & AWARDS</HighlightText>
              </Col>
            </Row>
          </MarginTop>

          {/* Experience Timeline */}
          {experiences && experiences.length > 0 ? (
            <MarginTop mt="2rem">
              <SectionTitle level={3}>Experience</SectionTitle>
              <TimelineStyled
                items={experiences
                  .map((exp, i) => ({
                    color: "#5facbc",
                    children: exp ? (
                      <div>
                        <div className="experience-infor">
                          {exp.company || "Công ty không xác định"}
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noreferrer"
                            >
                              ({exp.website})
                            </a>
                          )}
                        </div>
                        <div className="time-start">
                          {exp.period?.start || "Không xác định"} -{" "}
                          {exp.period?.end || "Hiện tại"}
                        </div>
                        {exp.description && Array.isArray(exp.description) ? (
                          exp.description.map((desc, idx) => (
                            <ParagraphStyled color="#fff" key={idx}>
                              • {desc}
                            </ParagraphStyled>
                          ))
                        ) : (
                          <ParagraphStyled color="#fff">
                            • Không có mô tả
                          </ParagraphStyled>
                        )}
                      </div>
                    ) : null,
                  }))
                  .filter(Boolean)}
              />
            </MarginTop>
          ) : (
            <ParagraphStyled></ParagraphStyled>
          )}

          {education && (
            <MarginTop mt="2rem">
              <SectionTitle level={3}>Education</SectionTitle>
              <DarkCard>
                <p>
                  <b>{education.institution || "Chưa có thông tin"}</b>
                </p>
                <p>
                  {education.faculty || "Không xác định"} -{" "}
                  {education.major || "Không xác định"}
                </p>
                <p className="time-start">
                  {education.period?.start || "Không xác định"} -{" "}
                  {education.period?.end || "Hiện tại"}
                </p>
              </DarkCard>
            </MarginTop>
          )}

          {skills && (
            <MarginTop mt="2rem">
              <SectionTitle level={3}>Technical Skills</SectionTitle>
              <Row gutter={16}>
                {Object.entries(skills).map(([key, list]) => (
                  <Col span={12} key={key}>
                    <DarkCard title={key.toUpperCase()} variant={false}>
                      {list && Array.isArray(list) ? (
                        list.map((item, idx) => <p key={idx}>• {item}</p>)
                      ) : (
                        <p>• Không có kỹ năng</p>
                      )}
                    </DarkCard>
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

export default Experience;
