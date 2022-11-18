import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Products.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Spinner from 'react-bootstrap/Spinner'
import {useGetProductsQuery} from '../../services/shop'


const Products = ({title, query}) => {
  const {data, isLoading} = query()

  const spinner = <div className="louder-product">
    <Spinner className="spinner_border" animation="border" variant="danger"/>
  </div>

  return (
    <div className="products">
      <Header/>
      <h1 className="background-products">{title}<i className="bi bi-unity"></i></h1>
      {isLoading ? spinner : (
        <div className="row-products">
          {data?.map(product => {
            return (
              <ProductCard product={product} key={product.id}/>
            )
          })}
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default Products