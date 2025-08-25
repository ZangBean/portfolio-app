import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../redux/slices/projectsSlice";
import { List, Card } from "antd";

export default function Projects() {
  const dispatch = useDispatch();
  const { selectedUser, status } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={selectedUser ? selectedUser.projects : []}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.name}>
            <p>{item.desc}</p>
            <p>Tech: {item.tech}</p>
          </Card>
        </List.Item>
      )}
      loading={status === "loading"}
    />
  );
}
