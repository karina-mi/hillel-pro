import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import Footer from '../../components/Footer/Footer'
import {useSelector} from 'react-redux'
import './Cart.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  console.log(cart)
  return (
    <div className='products'>
      <Header/>
      <h1 className="background-products">Cart<i className="bi bi-unity"></i></h1>
        <div className='row-products'>
          {cart.length !== 0 ? cart?.map(product => {
            return (
              <ProductCard product={product} key={product.id} removable={true}/>
            )
          }) : <div style={{color: 'white'}}>No items</div>}
        </div>
      <Footer/>
    </div>
  )
}

export default Cart