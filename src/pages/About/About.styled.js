import { Card } from "antd";
import Title from "antd/es/typography/Title";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  color: #fff;
  min-height: 100vh;
  padding: 2rem;
  font-family: "Inter", sans-serif;
`;

export const HighlightNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const HighlightText = styled.div`
  font-size: 0.9rem;
  color: #fff;
`;

export const ProfileCard = styled(Card)`
  background-color: #333;

  color: #fff;

  .ant-card-body {
    padding: 1rem;
  }
`;

export const FeaturedWorkCard = styled(Card)`
  background-color: #2a2a2a;

  color: #fff;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
  }
`;
export const SectionTitle = styled(Title)`
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  color: #fff;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px; /* độ dày đường viền */
    background-color: #00ff33; /* màu xanh */
    border-radius: 3px;
  }
`;
