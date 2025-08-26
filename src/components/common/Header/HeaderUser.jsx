import { Link, useParams } from "react-router-dom";
import { StyledUserHeader, StyledMenu } from "./Header.styled";

export default function HeaderUser() {
  const { id } = useParams();

  const items = [
    { key: "about", label: <Link to={`/about/${id}`}>About</Link> },
    {
      key: "projects",
      label: <Link to={`/about/${id}/projects`}>Projects</Link>,
    },
    { key: "skills", label: <Link to={`/about/${id}/skills`}>Skills</Link> },
    {
      key: "experience",
      label: <Link to={`/about/${id}/experience`}>Experience</Link>,
    },
    { key: "contact", label: <Link to={`/about/${id}/contact`}>Contact</Link> },
  ];

  return (
    <StyledUserHeader>
      <StyledMenu mode="horizontal" items={items} />
    </StyledUserHeader>
  );
}
