import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  fetchPersonnelList,
  searchPersonnelLocal
} from '../actions'
import { PersonnelCard } from '../components/index'

export default function PersonnelList() {
  const personnelList = useSelector((state) => state.personnelListDisplay)
  const [nextPage, setNextPage] = useState(false)
  const [prevPage, setPrevPage] = useState(false)
  const [personnels, setPersonnels] = useState([])
  const [searchPersonnel, setSearchPersonnel] = useState('')
  const [page, setPage] = useState(0)
  const divider = 4
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPersonnelList())
  }, [dispatch])
  
  useEffect(() => {
    // inisialisasi personnel yang akan ditampilkan
    setPersonnels(personnelList.slice(0, divider))
    if (personnelList[divider]) {
      setNextPage(true)
    } else {
      setNextPage(false)
    }
    // eslint-disable-next-line
  }, [personnelList])

  function handleChangePage(order) {
    let tempPage = null
    let tempPersonnels = []
    let startIndex = null
    switch (order) {
      case 'next':
        if (nextPage) {
          tempPage = page + 1 
          startIndex = (tempPage * divider)
          tempPersonnels = personnelList.slice(startIndex, startIndex + divider)
          setPage(tempPage)
          setPersonnels(tempPersonnels)
          setPrevPage(true)
          if (!personnelList[((tempPage + 1) * divider)]) {
            setNextPage(false)
            console.log('next disable');
          }
        }
        break;
      case 'prev':
        if (prevPage) {
          tempPage = page - 1
          startIndex = (tempPage * divider)
          tempPersonnels = personnelList.slice(startIndex, startIndex + divider)
          setPage(tempPage)
          setPersonnels(tempPersonnels)
          setNextPage(true)
          if (!personnelList[((tempPage - 1) * divider)]) {
            setPrevPage(false)
            console.log('prev disable');
          }
        }
        break;
      default:
        console.log('wrong order');
        break;
    }
    console.log(tempPersonnels);
  }

  function handleSearchPersonnelInput(e) {
    setSearchPersonnel(e.target.value)
  }

  function submitSearchPersonnel(e) {
    e.preventDefault()
    dispatch(searchPersonnelLocal(searchPersonnel))
  }

  return (
    <div className="personnel-list-page">
      <div className="personnel-head">
        <div>
          <p className="personnel-list-title">PERSONNEL LIST</p>
          <p className="personnel-list-text">List of all personnels</p>
        </div>
        <div className="personnel-option">
          <div className="personnel-search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <form onSubmit={(e) => submitSearchPersonnel(e)}>
              <input onChange={(e) => handleSearchPersonnelInput(e)} value={ searchPersonnel } type="text" placeholder="Find Personnels" className="search-personnel-input"/>
            </form>
          </div>
          <div className="personnel-add">
            ADD PERSONNEL
            <i className="fa fa-plus" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="personnel-list-box">
        <div className="row">
          {
            (personnels.length > 0)
                ? personnels.map((personnel, index) => {
                  return(
                    <PersonnelCard
                      key={index}
                      personnel={personnel}
                    />
                  )
                })
                : <div>kosong</div>
          }
        </div>
      </div>
      <div className="personnel-card-option">
        <button 
          onClick={ () => handleChangePage('prev') } 
          className={`prev-page page-option button ${ prevPage ? "": "option-inactive"}`}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          Previous Page
        </button>
        <button 
          onClick={ () => handleChangePage('next') } 
          className={`next-page page-option button ${ nextPage ? "": "option-inactive"}`}
        >
          Next Page
          <i className="fa fa-angle-right page-option-icon" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}