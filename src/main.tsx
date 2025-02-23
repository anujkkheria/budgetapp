import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider, CssBaseline } from '@mui/material'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline>
        <App />
      </CssBaseline>
    </StyledEngineProvider>
  </StrictMode>
)
