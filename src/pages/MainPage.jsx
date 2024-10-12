import React from 'react'
import { FotoSlider } from '../components/Slider'
import Header from '../components/Header'
import ProductImage from '../components/ProductImage'
import { Footer } from '../layout/Footer'


const MainPage = () => {
  return (
    <div>
      <Header/>
      <FotoSlider/>
      <ProductImage/>
      <Footer/>
    </div>
  )
}

export default MainPage
