import React from 'react'
import CartWidget from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="https://template.canva.com/EAFGnCeDmQk/4/0/400w-SrWSgbl3lgI.jpg" width={100} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-md-0">
                
                <li className="nav-item">
                    <Link className="nav-link" to="/Categoria/Antojitos">Antojitos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Categoria/Postres">Postres</Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto me-3 mb-2 mb-md-0">
                
                <li className="nav-item">
                    <CartWidget/>
                </li>
                
            </ul>
        </div>
    </div>
</nav>
  )
}

export default NavBar