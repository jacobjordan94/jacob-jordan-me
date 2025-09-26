import { BrowserRouter } from 'react-router';
import { createContext, useState } from 'react';
import { useLocation, Navigate, Route, Routes } from 'react-router';
import Header from './components/Header';
import Globals from './context/Globals';
import SideNav from './components/SideNav';
import StandardLayout from './layouts/StandardLayout';
import ResponsiveLayout from './layouts/ResponsiveLayout';
import FixedResponsiveLayout from './layouts/FixedResponsiveLayout';
import StickyHeadersLayout from './layouts/StickyHeaders';
import PrintLayout from './layouts/PrintLayout';
import HomePage from './pages/home/HomePage';
import ExperiencePage from './pages/experience/ExperiencePage';
import ProjectsPage from './pages/projects/ProjectsPage';
import SkillsPage from './pages/skills/SkillsPage';
import AboutPage from './pages/about/AboutPage';
import ResumePage from './pages/resume/Resume';
import ContentPolicyPage from './pages/content-policy/ContentPolicyPage';
import Icon from './components/Icon';

export const GlobalContext = createContext();

function App() {
    const [globals] = useState(Globals);
    const [sideNavOpen, setSideNavOpen] = useState(false);

    return (
        <div className="application-container h-svh flex flex-col workbench-font">
            <BrowserRouter>
                <GlobalContext value={globals}>
                    <AppRoutes sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
                    <SideNav open={sideNavOpen} setSideNavOpen={setSideNavOpen} />
                </GlobalContext>
            </BrowserRouter>
        </div>
    );
}


function AppRoutes({ setSideNavOpen }) {
    const location = useLocation();
    return (
        <>
            <Header setSideNavOpen={setSideNavOpen} />
            <section key={location.pathname} className="content flex-1 overflow-scroll">
                <Routes>
                    <Route path="/*" element={<Navigate replace to="/404" />} />

                    {/* Standard Layout */}
                    <Route element={<StandardLayout />}>
                        <Route path='/content-policy' element={<ContentPolicyPage />} />
                    </Route>

                    {/* Responsive Layout */}
                    <Route element={<ResponsiveLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='experience' element={<ExperiencePage />} />
                    </Route>

                    {/* Sticky Headers */}
                    <Route element={<StickyHeadersLayout />}>
                        <Route path="projects" element={<ProjectsPage />} />
                    </Route>

                    {/* Fixed Responsive Layout */}
                    <Route element={<FixedResponsiveLayout />}>
                        <Route path="skills" element={<SkillsPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path='404' element={
                            <>
                                <title>jacob-jordan.me - 404</title>
                                <div className='404-page size-full flex items-center'>
                                    <div className="404-content w-full flex flex-col items-center opacity-50 gap-8">
                                        <Icon name="404" className='aspect-square w-full h-fit p-4 @lg:w-3/4 @lg:p-0 @2xl:w-1/2 @4xl:w-[512px]' />
                                        <div className="404-text @lg:text-lg @2xl:text-xl @4xl:text-2xl">nothing here but this guy...</div>
                                    </div>
                                </div>
                            </>
                        } />
                    </Route>

                    {/* Print Layout */}
                    <Route element={<PrintLayout />}>
                        <Route path="resume" element={<ResumePage />} />
                    </Route>
                </Routes>
            </section>
        </>
    );
}

export default App;
