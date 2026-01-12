import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // <--- 1. Add this import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap App inside BrowserRouter */}
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </StrictMode>,
)