import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'


const Home = () => {

  return (
    <div className='home'>
      <h1>HOME</h1>
      <Link to={'about'}>
        <Button variant="outline-info">About</Button>{' '}
      </Link>
      <Link to={'laptops'}>
        <Button variant="outline-info">Laptops</Button>{' '}
      </Link>
      <Link to={'smartphones'}>
        <Button variant="outline-info">Smartphones</Button>{' '}
      </Link>
    </div>
  )
}

export default Home