import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import app from './app.jsx'
import './app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <app />
  </StrictMode>,
)
