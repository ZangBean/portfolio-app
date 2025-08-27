import { Card, Typography, Col, Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const FeaturedWorkCard = styled(Card)`
  background-color: #2a2a2a;
  color: #fff;

  img {
    border-radius: 10px;
    width: 100%;
    max-height: 250px;
  }

  .ant-card-meta-title {
    color: #5facbc;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .ant-card-meta-description {
    color: #ccc;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;

const CardProfile = ({ personal_info }) => {
  const navigate = useNavigate();

  return (
    <Col span={8}>
      <FeaturedWorkCard
        cover={
          <img
            src={
              personal_info.image || "https://picsum.photos/200/300?grayscale"
            }
          />
        }
      >
        <Title style={{ color: "#fff" }}>{personal_info.name}</Title>
        <Card.Meta
          style={{
            color: "#fff",
            minHeight: "150px",
          }}
        />
        <Button
          type="primary"
          style={{ marginTop: "15px" }}
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </FeaturedWorkCard>
    </Col>
  );
};
export default CardProfile;
