import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersonnelList } from '../actions'

export default function PersonnelList() {
  const personnels = useSelector((state) => state.personnels)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('start');
    dispatch(fetchPersonnelList())
  }, [dispatch])

  return (
    <div>
      Personnel
      {/* {JSON.stringify(personnels)} */}

    </div>
  )
}