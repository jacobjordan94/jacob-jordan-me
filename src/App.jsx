import { BrowserRouter, Route, Routes } from 'react-router'
import StandardLayout from './layouts/StandardLayout'
import { Header } from './components/Header';
import { createContext, useState } from 'react';
import Globals from './context/Globals';
import HomePage from './pages/home/HomePage';
import ExperiencePage from './pages/experience/ExperiencePage';
import ProjectsPage from './pages/projects/ProjectsPage';
import SideNav from './components/SideNav';
import ResponsiveLayout from './layouts/ResponsiveLayout';
import SkillsPage from './pages/skills/SkillsPage';
import FixedResponsiveLayout from './layouts/FixedResponsiveLayout';
import AboutPage from './pages/about/AboutPage';

export const GlobalContext = createContext();

function App() {
  const [ globals ] = useState(Globals)
  const [ sideNavOpen, setSideNavOpen ] = useState(false);
  return (
    <div className="application-container h-svh flex flex-col workbench-font">
      <BrowserRouter>
        <GlobalContext value={ globals }>
          <Header setSideNavOpen={setSideNavOpen} />
          <section className="content flex-1 overflow-scroll">
            <Routes>
              {/* Standard Layout */}
              <Route element={ <StandardLayout /> }></Route>
              {/* Responsive Layout */}
              <Route element={ <ResponsiveLayout/> }>
                <Route index element={ <HomePage /> } />
                <Route path="projects" element={ <ProjectsPage /> } />
                <Route path='experience' element={ <ExperiencePage /> } />
              </Route>
              {/* Fixed Responsive Layout */}
              <Route element={ <FixedResponsiveLayout /> }>
                <Route path="skills" element={ <SkillsPage /> } />
                <Route path="about" element={ <AboutPage /> } />
              </Route>
            </Routes>
          </section>
          <SideNav open={sideNavOpen} setSideNavOpen={setSideNavOpen} />
        </GlobalContext>
      </BrowserRouter>
    </div>
  )
}

export default App;
