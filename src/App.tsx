import React from 'react'
import AppTrackItProvider from './context/TrackItContext'

/* Router */
import Router from './routes'

/* Global Style */
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppTrackItProvider>
        <Router />
      </AppTrackItProvider>
    </>
  )
}

export default App
