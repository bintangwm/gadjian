import React from 'react'

export default function PesonnelCard(props) {
  const { personnel } = props
  return (
    <div className="card personnel-card">
      <div className="card-header personnel-card-header">
          <span>Personnel ID: 
            <span className="personnel-id"> 123456</span>
          </span>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </div>
      <div className="card-body">
        <div className="personnel-avatar">
          <img src={ personnel.picture.large } alt="Photo"/>
        </div>
        <p className="personnel-title">Name</p>
        <p className="personnel-content">{ personnel.name.first + ' ' + personnel.name.last }</p>
        <p className="personnel-title">Telephone</p>
        <p className="personnel-content">{ personnel.phone }</p>
        <p className="personnel-title">Birthday</p>
        <p className="personnel-content">{ personnel.dob.date }</p>
        <p className="personnel-title">Email</p>
        <p className="personnel-content">{ personnel.email }</p>
      </div>
    </div>
  )
}
