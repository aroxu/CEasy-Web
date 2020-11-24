import React, {FC} from 'react'

import {useTheme} from './hooks/theme'
import Appbar from './components/Appbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const App: FC = () => {
  const theme = useTheme()[0]
  const darkTheme = createMuiTheme({
    palette: {
      type: theme === 'dark' ? 'dark' : 'light'
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
