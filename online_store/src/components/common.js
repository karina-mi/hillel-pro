import {Col} from 'react-bootstrap'
import {v4} from 'uuid'
import React from 'react'

export const ratingToHTML = rating => {
  const result = []
  for (let i = 0; i <= 4; i++) {
    const starDifference = rating - i
    if (starDifference > 1) {
      result.push(<Col className="bi-star-fill" key={v4()}/>)
    } else if (starDifference < 1 && starDifference > 0.5) {
      result.push(<Col className="bi-star-half" key={v4()}/>)
    } else if (starDifference <= 0.5) {
      result.push(<Col className="bi bi-star" key={v4()}/>)
    }
  }
  return result
}

export const getPriceWithDiscount = (price, discountPercentage) => Math.round(price - (price * discountPercentage / 100))

export const rating = product => <div className="stars-rating">{ratingToHTML(product?.rating)}</div>
