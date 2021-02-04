import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <span className="sidebar-icon">
              <i class="fa fa-home" aria-hidden="true"></i>
            </span>
            <span className="sidebar-icon">Beranda</span>
          </a>
        </li> 
        <li>
          <a href="#">
            <span className="sidebar-icon">
              <i class="fa fa-users" aria-hidden="true"></i>
            </span>
            <span className="sidebar-icon">Personnel List</span>
          </a>
        </li> 
        <li>
          <a href="#">
            <span className="sidebar-icon">
              <i class="fa fa-calendar" aria-hidden="true"></i>
            </span>
            <span className="sidebar-icon">Daily Attendance</span>
          </a>
        </li> 
      </ul>
    </div>
  )
}

export default Sidebar
