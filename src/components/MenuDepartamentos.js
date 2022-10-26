import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuDepartamentos extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/create">CREATE</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">NAN</NavLink>
                    </li>
                    <li className="nav-item">
                    
                    </li>
                </ul>
                </div>
            </div>
        </nav>

      </div>
    )
  }
}
