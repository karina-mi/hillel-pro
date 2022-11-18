import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import {useGetProductsQuery, useGetLaptopsQuery, useGetSmartphonesQuery} from './services/shop'
import Cart from './pages/Cart/Cart'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products/' element={<Products title='Products' query={useGetProductsQuery}/>}>
          <Route index element={<Products/>} />
      </Route>
      <Route path='/product/'>
        <Route path=':id' element={<Product/>} />
      </Route>
      <Route path='/laptops/' element={<Products title='Laptops' query={useGetLaptopsQuery}/>}/>
      <Route path='/smartphones/' element={<Products title='Smartphones' query={useGetSmartphonesQuery}/>}/>
      <Route path='/cart/' element={<Cart/>}/>
    </Routes>
  )
}

export default App