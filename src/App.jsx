import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { fetchProjects } from "./redux/slices/projectsSlice";
import { store } from "./stores";
import { Layout } from "antd";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/About/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import HeaderMenu from "./components/common/Header/HeaderMenu";
import HeaderUser from "./components/common/Header/HeaderUser";
import AppFooter from "./components/common/Footer/Footer";

const { Content } = Layout;

function UserDetail() {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
      <HeaderUser />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Router>
      <HeaderMenu />
      <Layout style={{ minHeight: "100vh" }}>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<UserDetail />}>
              <Route index element={<AboutMe />} />
              <Route path="projects" element={<Projects />} />
              <Route path="skills" element={<Skills />} />
              <Route path="experience" element={<Experience />} />
              <Route path="contact" element={<Contact />} />
            </Route>
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
