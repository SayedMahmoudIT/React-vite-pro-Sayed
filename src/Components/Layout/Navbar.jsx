import { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info text-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ART FACTORY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-uppercase" href="#">frequently questions</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">ABOUT US</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">FEATURES</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">FAQ&apos;S</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">BLOG</a></li>
                </ul>
              </li>

              <li className="nav-item text-uppercase">
                <a className="nav-link" href="#">contact us</a>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
    </>
  }
}
