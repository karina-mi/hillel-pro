import React from 'react'
import {Card, Col} from 'react-bootstrap'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import {rating, getPriceWithDiscount} from '../common'

const ProductCard = ({product}) => {

  return (
    <div className='product-card'>
      <Link to={`/product/${product.id}`}>
        <img className='img-products' variant="top" src={product?.thumbnail}/>
      </Link>
      <Card.Body>
        <div className='card_body card-body-title'>
          <Link to={`/product/${product.id}`} className='product-link'>
            <div className='card-title'>{product?.title}</div>
          </Link>
          <div>{rating(product)}</div>
        </div>
        <div className='card-body-price'>`
          <div className='price_product'>
            <div className='text-muted'>${product?.price}</div>
            <div className='price-product'>${getPriceWithDiscount(product?.price, product?.discountPercentage)}</div>
          </div>
          <div>
            <button type="button" className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </Card.Body>
     </div>
  )
}

export default ProductCard
