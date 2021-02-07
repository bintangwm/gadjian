import React, {
  useEffect,
  useState
} from 'react'
import avatar from '../assets/img_avatar2.png'
import './Navbar.css'

export default function Navbar() {
  const [username, setUsername] = useState('')
  
  useEffect(() => {
    setUsername('Gadjian User')
  }, [])

  return (
    <nav className="navbar navbar-white">
      <div className="nav-item">
        <div className="user-name">
          <span className="user-greetings">Hallo, </span>
          <span className="user-username">{ username }</span>
        </div>
        <div className="user-avatar">
          <img src={ avatar } alt=""/>
        </div>
      </div>
    </nav>
  )
}