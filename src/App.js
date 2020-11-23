import React from 'react'

import Appbar from './components/Appbar.js'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
let darkModeEnabled = localStorage.getItem('darkmode')

if (darkModeEnabled === null) {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    localStorage.setItem('darkmode', true)
    darkModeEnabled = 'true'
  } else {
    localStorage.setItem('darkmode', false)
    darkModeEnabled = 'false'
  }
}

const App = () => {
  const palletType = darkModeEnabled === 'true' ? 'dark' : 'light'
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <CssBaseline />
        <Appbar />
      </>
    </ThemeProvider>
  )
}

export default App
