import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores/screens/store'
import { Layout } from 'antd'
import Home from './pages/Home/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact/Contact'
import HeaderMenu from './components/common/Header/HeaderMenu'
import HeaderUser from './components/common/Header/HeaderUser'
import AppFooter from './components/common/Footer/Footer'
import AboutMe from './pages/AboutMe'
import Login from './pages/Login'

const { Content } = Layout

function UserDetail({ children }) {
  return (
    <div style={{ padding: '20px', margin: '20px' }}>
      <HeaderUser />
      {children}
    </div>
  )
}

function AppContent() {
  return (
    <Router>
      <HeaderMenu />
      <Layout style={{ minHeight: '100vh', background: '#1e1e1e' }}>
        <Content>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />

            <Route
              path='/about/:id'
              element={
                <UserDetail>
                  <AboutMe />
                </UserDetail>
              }
            />
            <Route
              path='/projects/:id'
              element={
                <UserDetail>
                  <Projects />
                </UserDetail>
              }
            />
            <Route
              path='/skills/:id'
              element={
                <UserDetail>
                  <Skills />
                </UserDetail>
              }
            />
            <Route
              path='/experience/:id'
              element={
                <UserDetail>
                  <Experience />
                </UserDetail>
              }
            />
            <Route
              path='/contact/:id'
              element={
                <UserDetail>
                  <Contact />
                </UserDetail>
              }
            />
          </Routes>
        </Content>
      </Layout>
      <AppFooter />
    </Router>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App

