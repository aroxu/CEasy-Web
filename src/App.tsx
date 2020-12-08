import React, { FC } from 'react'

import Appbar from './components/Appbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { getDarkModeStatus } from './utils/theme'

const App: FC = () => {
  const theme = getDarkModeStatus()
  const darkTheme = createMuiTheme({
    palette: {
      type: theme ? 'dark' : 'light'
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
