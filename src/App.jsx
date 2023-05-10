import React from 'react'
import Filter from './Filter/Filter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Visual from './Visual'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Filter />} />
          <Route path='/visual' element={<Visual />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

