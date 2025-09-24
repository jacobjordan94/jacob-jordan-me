import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const PRODUCTION = import.meta.env.PROD;
const Root = () => PRODUCTION ? <App /> : <StrictMode><App /></StrictMode>

createRoot(document.getElementById('root')).render(
    <Root />
)
