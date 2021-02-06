import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersonnelList } from '../actions'
import { PersonnelCard } from '../components/index'

export default function PersonnelList() {
  const personnelList = useSelector((state) => state.personnels)
  // const personnelList = useSelector((state) => state.personnelList)
  // const [personnelList, setPersonnels] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('start');
    dispatch(fetchPersonnelList())
  }, [dispatch])

  return (
    <div className="personnel-list-page">
      <div className="personnel-head justify-content-between">
        <div>
          <p className="personnel-list-title">PERSONNEL LIST</p>
          <p className="personnel-list-text">List of all personnels</p>
        </div>
        <div className="personnel-option">
          <div className="personnel-search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Find Personnels"/>
          </div>
          <div className="personnel-add">
            <span>ADD PERSONNEL</span>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="personnel-list-box">
        {/* <div className="row justify-content-between"> */}
          {
            (personnelList.length > 0)
                ? personnelList.map((personnel, index) => {
                  return(
                    <PersonnelCard
                      key={index}
                      personnel={personnel}
                    />
                  )
                })
                : <div>kosong</div>
          }
        {/* </div> */}

      </div>
      <div className="option">
        <div className="prev-page">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          Previous Page
        </div>
        <div className="next-page">
          Next Page
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}