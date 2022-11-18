import React from 'react'
import './header.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {

  return <div className='header-logo'>
    <i className="bi bi-unity logo-header"></i>
    <Link to={'/cart'}><i className="bi bi-cart-check"></i></Link>
  </div>
}

export default Header