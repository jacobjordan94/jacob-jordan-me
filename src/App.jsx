import { BrowserRouter, Route, Routes } from 'react-router'
import StandardLayout from './layouts/StandardLayout'
import { Header } from './components/Header';
import { createContext, useState } from 'react';
import Globals from './context/Globals';
import HomePage from './pages/home/HomePage';
import ExperiencePage from './pages/experience/ExperiencePage';
import ProjectsPage from './pages/projects/Projects';
import SideNav from './components/SideNav';
import ResponsiveLayout from './layouts/ResponsiveLayout';
import SkillsPage from './pages/skills/SkillsPage';
import FixedResponsiveLayout from './layouts/FixedResponsiveLayout';

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
              <Route element={ <StandardLayout /> }>
                <Route index element={ <HomePage /> }></Route>
                <Route path="projects" element={ <ProjectsPage /> }></Route>
              </Route>
              <Route element={ <ResponsiveLayout/> }>
                <Route path='experience' element={ <ExperiencePage /> }></Route>
              </Route>
              <Route element={ <FixedResponsiveLayout /> }>
                <Route path="skills" element={ <SkillsPage /> } />
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
