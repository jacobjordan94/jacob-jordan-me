import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import StandardLayout from './layouts/StandardLayout'
import { Header } from './components/Header';
import { createContext, useState } from 'react';
import Globals from './context/Globals';

export const GlobalContext = createContext();

function App() {
  const [ globals ] = useState(Globals)
  return (
    <BrowserRouter>
      <GlobalContext value={ globals }>
        <Header />
        <Routes>
          <Route element={ <StandardLayout /> }>
            <Route index element={ <HomePage /> }></Route>
          </Route>
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  )
}

export default App;
