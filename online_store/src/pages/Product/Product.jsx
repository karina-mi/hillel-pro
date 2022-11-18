import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Button, Col, Row} from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './product.css'
import Spinner from 'react-bootstrap/Spinner'
import ProductCard from '../../components/ProductCard/ProductCard'

const Product = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false);
  const {id} = useParams()

  const ratingToHTML = rating => {
    const result = []
    for (let i = 0; i <= 4; i++) {
      const starDifference = rating - i
      if (starDifference > 1) {
        result.push(<div className="bi-star-fill"/>)
      } else if (starDifference < 1 && starDifference > 0.5) {
        result.push(<div className="bi-star-half"/>)
      } else if (starDifference <= 0.5) {
        result.push(<div className="bi bi-star"/>)
      }
    }
    return result
  }
  const rating = <div className="stars-rating">{ratingToHTML(product?.rating)}</div>
  console.log(product)

  const getPriceWithDiscount = (price, discountPercentage) => Math.round(price - (price * discountPercentage / 100))

  const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    setLoading(false);
    setProduct(data)
  }

  useEffect(() => {
    setLoading(true);
    fetchProduct()
  }, [])

  const spinner = <div className='louder-product'>
    <Spinner className='spinner_border' animation="border" variant="danger" />
  </div>

  return (
    <div>
      <Header/>
      <h1 className="background-products">Product<i className="bi bi-unity"></i></h1>
      { loading ? spinner : (
        <div className='product-body'>
          <img className='product-img' src={product?.thumbnail}/>
          <div className='description-product'>
            <div>
              <h1 className='product-title'>{product?.title}</h1>
            </div>
            <div className='product_description'>{product?.description}</div>
            <div>{rating}</div>
            <div className='product-price-body'>
              <div className='product-price'>${product?.price}</div>
              <div className='product-discount'>${getPriceWithDiscount(product?.price, product?.discountPercentage)}</div>
              <div>
                <Button className='product-button' variant="primary">Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>

  )
}

export default Product