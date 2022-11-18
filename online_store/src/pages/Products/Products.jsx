import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './products.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Spinner from 'react-bootstrap/Spinner'


const Products = (props) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async url => {
    const response = await fetch(url)
    return await response.json()
  }

  const fetchProducts = async () => {
    setLoading(true)
    let result = []
    const requests = []
    const urls = [
      'https://dummyjson.com/products/category/smartphones',
      'https://dummyjson.com/products/category/laptops',
    ]
    urls.forEach(url => requests.push(getData(url)))
    const responsesData = await Promise.all(requests)
    responsesData.forEach(({products}) => {
      result = result.concat(products)
    })

    const sortedProducts = result.sort((a, b) => b.rating - a.rating)
    setProducts(sortedProducts.slice(0, 10))
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const spinner = <div className="louder-product">
    <Spinner className="spinner_border" animation="border" variant="danger"/>
  </div>

  return (
    <div className="products">
      <Header/>
      <h1 className="background-products">Products<i className="bi bi-unity"></i></h1>
      {loading ? spinner : (
        <div className="row-products">
          {products?.map(product => {
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