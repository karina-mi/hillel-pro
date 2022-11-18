import React from 'react'
import {Button, Card, Col, Row} from 'react-bootstrap'
import './ProductCard.css'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {

  const onClick = () => {
  }

  const ratingToHTML = rating => {
    const result = []
    for (let i = 0; i <= 4; i++) {
      const starDifference = rating - i
      if (starDifference > 1) {
        result.push(<Col className="bi-star-fill"/>)
      } else if (starDifference < 1 && starDifference > 0.5) {
        result.push(<Col className="bi-star-half"/>)
      } else if (starDifference <= 0.5) {
        result.push(<Col className="bi bi-star"/>)
      }
    }
    return result
  }

  const getPriceWithDiscount = (price, discountPercentage) => Math.round(price - (price * discountPercentage / 100))

  const rating = <div className="stars-rating">{ratingToHTML(product?.rating)}</div>

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
          <div>{rating}</div>
        </div>
        <div className='card-body-price'>
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
