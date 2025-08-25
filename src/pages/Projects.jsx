import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../redux/slices/projectsSlice";
import { List, Card } from "antd";

export default function Projects() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.name}>
            <p>{item.desc}</p>
            <p>Tech: {item.tech}</p>
          </Card>
        </List.Item>
      )}
      loading={status === "idle"}
    />
  );
}
