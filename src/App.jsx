import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import StandardLayout from './layouts/StandardLayout'
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={ <StandardLayout /> }>
          <Route index element={ <HomePage /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
