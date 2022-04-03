import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Pages */
import Signin from './page/Signin'
import Signup from './page/Signup'
import Today from './page/Today'
import Habits from './page/Habits'
import Historic from './page/Historic'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/today" element={<Today />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/historic" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
