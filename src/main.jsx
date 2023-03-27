import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './hooks/auth'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <Routes />
//     </ThemeProvider>
//   </React.StrictMode>,
// document.getElementById('root')
// )
