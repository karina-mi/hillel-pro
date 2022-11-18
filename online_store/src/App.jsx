import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import {useGetProductsQuery, useGetLaptopsQuery, useGetSmartphonesQuery} from './services/shop'
import Cart from './pages/Cart/Cart'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Products title='Products' query={useGetProductsQuery}/>}/>
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