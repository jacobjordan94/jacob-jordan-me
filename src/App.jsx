import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import StandardLayout from './layouts/StandardLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <StandardLayout /> }>
          <Route index element={ <HomePage /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
