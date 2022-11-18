import React from 'react'
import {useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Product.css'
import Spinner from 'react-bootstrap/Spinner'
import {useGetProductQuery, useGetRelatedProductsQuery} from '../../services/shop'
import {rating, getPriceWithDiscount} from '../../components/common'
import ProductCard from '../../components/ProductCard/ProductCard'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/cartSlice'

const Product = () => {
  const {id} = useParams()
  const {data: product, isLoading} = useGetProductQuery(id)
  const {data: related} = useGetRelatedProductsQuery({id: product?.id, category: product?.category})

  const dispatch = useDispatch()

  const spinner = <div className='louder-product'>
    <Spinner className='spinner_border' animation="border" variant="danger" />
  </div>

  return (
    <div>
      <Header/>
      <h1 className="background-products">Product<i className="bi bi-unity"></i></h1>
      { isLoading ? spinner : (
        <div className='product-body'>
          <img className='product-img' src={product?.thumbnail}/>
          <div className='description-product'>
            <div>
              <h1 className='product-title'>{product?.title}</h1>
            </div>
            <div className='product_description'>{product?.description}</div>
            <div>{rating(product)}</div>
            <div className='product-price-body'>
              <div className='product-price'>${product?.price}</div>
              <div className='product-discount'>${getPriceWithDiscount(product?.price, product?.discountPercentage)}</div>
              <div>
                <Button
                  className='product-button'
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className='row-products'>
          {related?.map(product => {
            return (
              <ProductCard product={product} key={product.id}/>
            )
          })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Product