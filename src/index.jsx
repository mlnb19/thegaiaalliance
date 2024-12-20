
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import App from './App'

const chakraTheme = extendTheme({})
const muiTheme = createTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <ChakraProvider theme={chakraTheme}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
)
