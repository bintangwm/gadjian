import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" className="sidebar-icon">
              <i className="fa fa-home" aria-hidden="true"></i>
              Beranda
          </a>
        </li> 
        <li>
          <a href="#" className="sidebar-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
              Personnel List
          </a>
        </li> 
        <li>
          <a href="#" className="sidebar-icon">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              Daily Attendance
          </a>
        </li> 
      </ul>
    </div>
  )
}

export default Sidebar
