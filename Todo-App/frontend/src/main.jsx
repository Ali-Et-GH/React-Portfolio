import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@/styles/general/general.css'
import '@/styles/general/variables.css'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>
)
