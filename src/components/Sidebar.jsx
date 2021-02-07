import React from 'react'
import gadjianLogo from '../assets/gadjian_logo_white.png'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <img src={ gadjianLogo } alt="logo gadjian"/>
      </div>
      <ul>
        <li>
          <button className="sidebar-item button">
              <i className="fa fa-home" aria-hidden="true"></i>
              Beranda
          </button>
        </li> 
        <li>
          <button className="sidebar-item button">
              <i className="fa fa-users" aria-hidden="true"></i>
              Personnel List
          </button>
        </li> 
        <li>
          <button className="sidebar-item button">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              Daily Attendance
          </button>
        </li> 
      </ul>
    </div>
  )
}

export default Sidebar
