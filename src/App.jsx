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
import AppFooter from './components/common/Footer/Footer'
import AboutMe from './pages/AboutMe'
import Login from './pages/Login'
import { UserDetail } from './layouts/UserDetail/UserDetail.layout'
import styled from 'styled-components'

const { Content } = Layout
const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: #1e1e1e;
`
function AppContent() {
  return (
    <Router>
      <HeaderMenu />
      <StyledLayout>
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
      </StyledLayout>
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

