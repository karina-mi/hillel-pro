import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import Footer from '../../components/Footer/Footer'
import Spinner from 'react-bootstrap/Spinner';
import './smartphones.css'


const Smartphones = () => {
  const [smartphones, setSmartphones] = useState(null)
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/category/smartphones`)
    const data = await response.json()
    setSmartphones(data.products)
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchProduct()
  }, [])

  const spinner = <div className='louder-product'>
    <Spinner className='spinner_border' animation="border" variant="danger" />
  </div>

  return (
    <div className='products'>
      <Header/>
      <h1 className="background-products">Smartphones<i className="bi bi-unity"></i></h1>
      { loading ? spinner : (
        <div className='row-products'>
          {smartphones?.map(smartphone => {
            return (
              <ProductCard product={smartphone} key={smartphone.id}/>
            )
          })}
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default Smartphones
