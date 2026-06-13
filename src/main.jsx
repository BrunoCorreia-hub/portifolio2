import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import standardThemes from './Styles/standardThemes'
import Home from "./Home/index"
import GlobalStyles from './Styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardThemes}>
      <GlobalStyles />
    <Home />
    </ThemeProvider>
  </StrictMode>,
)
