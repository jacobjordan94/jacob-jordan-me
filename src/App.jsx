import { BrowserRouter, Route, Routes } from 'react-router'
import StandardLayout from './layouts/StandardLayout'
import { Header } from './components/Header';
import { createContext, useState } from 'react';
import Globals from './context/Globals';
import HomePage from './pages/home/Home';

export const GlobalContext = createContext();

function App() {
  const [ globals ] = useState(Globals)
  return (
    <div className="application-container h-svh flex flex-col">
      <BrowserRouter>
        <GlobalContext value={ globals }>
          <Header />
          <section className="content flex-1 overflow-scroll">
            <Routes>
              <Route element={ <StandardLayout /> }>
                <Route index element={ <HomePage /> }></Route>
              </Route>
            </Routes>
          </section>
        </GlobalContext>
      </BrowserRouter>
    </div>
  )
}

export default App;
