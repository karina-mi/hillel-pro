import React from 'react'
import {Card, Col} from 'react-bootstrap'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import {rating, getPriceWithDiscount} from '../common'
import {useDispatch} from 'react-redux'
import {addToCart, removeItem} from '../../redux/cartSlice'
import Button from 'react-bootstrap/Button';

const ProductCard = ({product, removable = false}) => {
  const dispatch = useDispatch()

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
            <div className='price-product'>${getPriceWithDiscount(product?.price, product?.discountPercentage)}
              {product.quantity && <div style={{color: 'red'}}>{product.quantity}</div>}
            </div>
          </div>
          <div>

            <Button variant="outline-danger" onClick={() => dispatch(addToCart(product))}>Add to cart</Button>{' '}
          </div>
          {removable && <button type="button" className="btn btn-primary btn-background"
                                onClick={() => dispatch(removeItem(product.id))}><i className="bi bi-x-square"></i></button>}
        </div>
      </Card.Body>
     </div>
  )
}

export default ProductCard
