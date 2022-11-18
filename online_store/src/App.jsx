import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Footer from './components/Footer/Footer'
import Laptops from './pages/Laptops/Laptops'
import Smartphones from './pages/Smartphones/Smartphones'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products/'>
          <Route index element={<Products/>} />
      </Route>
      <Route path='/product/'>
        <Route path=':id' element={<Product/>} />
      </Route>
      <Route path='/laptops/' element={<Laptops/>}/>
      <Route path='/smartphones/' element={<Smartphones/>}/>
    </Routes>
  )
}

export default App