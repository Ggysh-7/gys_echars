import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import EcharsO from './Echars/EcharsO'
import EcharsT from './Echars/EcharsT'
import EcharsTh from './Echars/EcharsTh'
import EcharsF from './Echars/EcharsF'
import EcharsFi from './Echars/EcharsFi'
import EcharsS from './Echars/EcharsS'
import EcharsSe from './Echars/EcharsSe'

export default function BaseRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EcharsO />} />
        <Route path='/echarst' element={<EcharsT />} />
        <Route path='/echarsth' element={<EcharsTh />} />
        <Route path='/echarsf' element={<EcharsF />} />
        <Route path='/echarsfi' element={<EcharsFi />} />
        <Route path='/echarss' element={<EcharsS />} />
        <Route path='/echarsse' element={<EcharsSe />} />
      </Routes>
    </BrowserRouter>
  )
}
