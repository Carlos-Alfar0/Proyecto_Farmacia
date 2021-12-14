import React from 'react'
import {  Link } from "react-router-dom"

export default function index() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-black">

<Link class="navbar-brand" style={{color: "#ECF0F1"}} to="/farmacias">Farmacias Similares</Link>


<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link class="nav-link" style={{color: "white"}} to="/medicamentos">Medicamentos</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" style={{color: "white"}} to="/vitaminas">Vitaminas</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" style={{color: "white"}} to="/productos">Productos</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" style={{color: "white"}} to="/informacion">Informacion</Link>
    </li>
  </ul>
  </div>
  </nav>
  </div>  
    )
}
//rfc