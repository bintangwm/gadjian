import React, {
  useEffect,
  useState
} from 'react'
import avatar from '../assets/img_avatar2.png'
import gadjianLogo from '../assets/gadjian_logo_white.png'
import './Navbar.css'

export default function Navbar() {
  const [username, setUsername] = useState('')
  
  useEffect(() => {
    setUsername('Gadjian User')
  }, [])

  return (
    <nav className="navbar navbar-white">
      <a className="navbar-brand">
        <img src={ gadjianLogo } alt="logo gadjian"/>
      </a>
      <div className="nav-item">
        <div className="user-name">
          <span className="user-greetings">Hallo, </span>
          <span className="user-username">{ username }</span>
        </div>
        <div className="user-avatar">
          <img src={ avatar } alt="Photo"/>
        </div>
      </div>
    </nav>
  )
}