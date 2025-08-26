import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { fetchProjects } from "./redux/slices/projectsSlice";
import { store } from "./stores"; // Kiểm tra đường dẫn
import { Layout } from "antd";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AppHeader from "./components/common/Header/Header";
import AppFooter from "./components/common/Footer/Footer";
import Sidebar from "./components/common/Sidebar/Sidebar";

const { Content } = Layout;

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Router>
      <AppHeader />
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Content>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
      </Layout>
      <AppFooter />
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
