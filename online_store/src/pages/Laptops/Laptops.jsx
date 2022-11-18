import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import Footer from '../../components/Footer/Footer'
import Spinner from 'react-bootstrap/Spinner'
import {useGetLaptopsQuery, useGetSmartphonesQuery} from '../../services/shop'

const Laptops = () => {
  const {data, isLoading} = useGetLaptopsQuery()

  const spinner = <div className='louder-product'>
    <Spinner className='spinner_border' animation="border" variant="danger" />
  </div>

  return (
    <div className='products'>
      <Header/>
      <h1 className="background-products">Laptops<i className="bi bi-unity"></i></h1>
      { isLoading ? spinner : (
        <div className='row-products'>
          {data?.products?.map(laptop => {
            return (
              <ProductCard product={laptop} key={laptop.id}/>
            )
          })}
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default Laptops

