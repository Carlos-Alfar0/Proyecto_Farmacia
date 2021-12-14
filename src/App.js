import React from 'react'
import Navbar from '../src/components/Navbar/index'
import Farmacias from './components/inicio/index'
import Foot from '../src/components/footer/index'
import Vitaminas from './components/Vitaminas/index'
import Informacion from './components/Informacion/index'
import Productos from './components/Productos/index'
import Medicamentos from './components/Medicamentos/index'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


export default function App() {
  return (
    <div>


<BrowserRouter>
<Navbar/>

    <Routes>
      <Route path="informacion" element={<Informacion />} />
      <Route path="farmacias" element={<Farmacias/>} />
      <Route path="medicamentos" element={<Medicamentos />} />
      <Route path="vitaminas" element={<Vitaminas />} />
      <Route path="productos" element={<Productos />} />
    </Routes>
    <Foot/>
  </BrowserRouter>

    </div>
  )
}
