import React, { useEffect } from 'react'
import Topbar from './Topbar'
import About from './About'
import SliderCard from './SliderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/product/product.actions'
import SingleItem from './SingleItem'

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector((store)=>store.ProductReducer?.products)

  useEffect(()=>{
    dispatch(getProducts());
  },[])
  return (
    <div className=''>
      <Topbar/>
      <About/>
      <SliderCard/>
      {products?.map((restaurant,i)=>{
        return <SingleItem {...restaurant}/>
      })}
    </div>
  )
}

export default ProductList