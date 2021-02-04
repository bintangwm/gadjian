import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersonnelList } from '../actions'
import avatar_img from '../assets/img_avatar2.png'

export default function PersonnelList() {
  // const personnels = useSelector((state) => state.personnels)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('start');
    dispatch(fetchPersonnelList())
  }, [dispatch])

  return (
    <div>
      <div className="personnel-head justify-content-between">
        <div>
          <p>Personnel List</p>
          <p>List of all personnels</p>
        </div>
        <div>
          <div className="personnel-find">
            <i class="fa fa-search" aria-hidden="true"></i>
            <span> Find Personnel</span>
          </div>
          <div className="personnel-add">
            <span>ADD PERSONNEL </span>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="personnel-id">
              <span>Personnel ID: </span>
              <span>123456</span>
            </div>
            <div>
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
          </div>
          <div className="card-body">
            <p className="personnel-title">Name</p>
            <p className="personnel-content">First Name</p>
            <p className="personnel-title">Telephone</p>
            <p className="personnel-content">0812-1844-9933</p>
            <p className="personnel-title">Birthday</p>
            <p className="personnel-content">DD-MM</p>
            <p className="personnel-title">Email</p>
            <p className="personnel-content">Email Adress</p>
          </div>
        </div>
      </div>
      <div className="option">
        <div className="prev-page">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
          Previous Page
        </div>
        <div className="next-page">
          Next Page
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}