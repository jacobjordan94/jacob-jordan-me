import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// todo - environment variable
const PRODUCTION = false;
const Root = () => PRODUCTION ? <App /> : <StrictMode><App /></StrictMode>

createRoot(document.getElementById('root')).render(
  <Root />
)
