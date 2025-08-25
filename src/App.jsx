import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores";
import { Layout } from "antd";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AppHeader from "./components/common/Header/Header";
import AppFooter from "./components/common/Footer/Footer";
import Sidebar from "./components/common/Sidebar/Sidebar";

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppHeader />
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>
        </Layout>
        <AppFooter />
      </Router>
    </Provider>
  );
}

export default App;
