import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import "./i18n.js";
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Portafolio-FernandoHaro/">
    
      <App />
    </BrowserRouter>
  </StrictMode>,
)
