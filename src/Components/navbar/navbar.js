import React from 'react'
import "./navbar.css"
const navBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="index.html">happy socks</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                             <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link active" href="nosotros.html">Nosotros</a>
                        </li>
                        
                        <li className="nav-item dropdown">
                             <a className="nav-link dropdown-toggle active"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias</a>
                             <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Personajes</a></li>
                                <li><a className="dropdown-item" href="#">Deportivas</a></li>
                                <li><a className="dropdown-item" href="#">Formales</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>              
             
    )
}

export default navBar

