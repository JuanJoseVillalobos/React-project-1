import React from "react"
import Logo from "../assets/images/logo.png"

function SideBar() {
  return (
    <>
      
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img
              className="w-50"
              src= {Logo}
              alt="Digital House"
            />
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span> Dashboard - DH movies</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Actions</div>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </a>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
}

export default SideBar;
