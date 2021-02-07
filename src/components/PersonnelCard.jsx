import React from 'react'

export default function PesonnelCard(props) {
  const { personnel } = props
  return (
    <div className="card personnel-card">
      <div className="card-header personnel-card-header">
          <div className="personnel-id-text">
            Personnel ID:
            <span className="personnel-id"> 123456</span>
          </div>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </div>
      <div className="card-body">
        <div className="personnel-avatar">
          <img src={ personnel.picture.large } alt=""/>
        </div>
        <div className="personnel-bio">
          <div>
            <p className="bio-title">Name</p>
            <p className="bio-content">{ personnel.name.first + ' ' + personnel.name.last }</p>
            <p className="bio-title">Telephone</p>
            <p className="bio-content">{ personnel.phone }</p>
          </div>
          <div className="non-mobile">
            <p className="bio-title">Birthday</p>
            <p className="bio-content">{ personnel.dob.date }</p>
            <p className="bio-title">Email</p>
            <p className="bio-content">{ personnel.email }</p>
          </div>
        </div>
      </div>
    </div>
  )
}
