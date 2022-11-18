import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import Footer from '../../components/Footer/Footer'
import Spinner from 'react-bootstrap/Spinner'
import {useSelector} from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)

  return (
    <div className='products'>
      <Header/>
      <h1 className="background-products">Cart<i className="bi bi-unity"></i></h1>
        <div className='row-products'>
          {cart?.map(product => {
            console.log(product)
            return (
              <ProductCard product={product} key={product.id} removable={true}/>
            )
          })}
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default Cart