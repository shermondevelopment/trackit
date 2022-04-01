import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Pages */
import Signin from './page/Signin'
import Signup from './page/Signup'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
