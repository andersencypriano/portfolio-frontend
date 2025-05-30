import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Drawer from './ui/Drawer/Drawer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Drawer />
    <App />
  </StrictMode>,
)
