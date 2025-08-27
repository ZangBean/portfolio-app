import { Row, Col, List } from "antd";
import styled from "styled-components";
import CardProfile from "../components/CardProfile";
import Container from "../components/common/UI/Container";
import SectionTitle from "../components/common/UI/SectionTitle";
import Loading from "../components/Loading";
import { Card } from "antd";
import useUserDetail from "../hooks/useUserDetail";

const DarkCard = styled(Card)`
  background: #2a2a2a !important;

  .ant-card-head-title {
    color: #fff !important;
  }

  .ant-card-body {
    color: #fff !important;
  }

  .ant-list-item {
    color: #fff !important;
  }
`;

export default function Skills() {
  const { selectedUser, status, error } = useUserDetail();

  if (status === "loading" && !selectedUser) {
    return <Loading />;
  }

  if (error) {
    return <p style={{ color: "red" }}>Lỗi: {error}</p>;
  }

  if (!selectedUser) {
    return <p>Không tìm thấy người dùng</p>;
  }

  const { personal_info, skills = {} } = selectedUser.cv || {};

  const skillCategories = [
    { title: "Frontend", data: skills.frontend || [] },
    { title: "Backend", data: skills.backend || [] },
    { title: "Database", data: skills.database || [] },
    { title: "Other", data: skills.other || [] },
  ];

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
        <CardProfile personal_info={personal_info} />
        <Col span={16}>
          <Container>
            <SectionTitle level={3}>Skills</SectionTitle>
            <Row gutter={[16, 16]}>
              {skillCategories.map((category, index) => (
                <Col span={12} key={index}>
                  <DarkCard title={category.title} bordered={false}>
                    <List
                      dataSource={category.data}
                      renderItem={(item, i) => (
                        <List.Item key={i}>{item}</List.Item>
                      )}
                    />
                  </DarkCard>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
