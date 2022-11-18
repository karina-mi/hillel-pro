 import React from 'react'
 import {Link} from 'react-router-dom'
 import Footer from '../../components/Footer/Footer'
 import Header from '../../components/Header/Header'

 const About = () => {

  return (
    <div className='about'>
      <h1>ABOUT</h1>
      <Link  to={'/'}>
        <button>Home</button>
      </Link>
      <Header/>
      <Footer/>
    </div>
  )
 }

 export default About