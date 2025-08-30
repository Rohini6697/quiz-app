import React from 'react'
// import Category from '../../data/catagories'
import { Category } from '../../data/catagories'
import HomeCards from './HomeCards'
// import HomeCards from './HomeCards'
import '../../styles/home/HomeMain.css'

const HomeMain = ({categories}) => {
  return (
    <div className='category-main'>
      
      <HomeCards categories = {categories}/> 
      
    </div>
  )
}

export default HomeMain
