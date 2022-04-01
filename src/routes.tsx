import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Pages */
import Signin from './page/Signin'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
