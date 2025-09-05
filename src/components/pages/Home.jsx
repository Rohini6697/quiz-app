import React, { useEffect, useState } from 'react'
import HomeMain from '../home/HomeMain'
import { FaSearch } from "react-icons/fa";
import '../../styles/pages/Home.css'
import { Category } from '../../data/catagories';




const Home = () => {
  const [search,setSearch] = useState('');
  const [filterd,setFilterd] = useState(Category);
  

  useEffect(() => {
    if(search.trim() === '')
      setFilterd(Category)
    else{
      const FilterdItem = Category.filter((item) => item.category.toLowerCase().includes(search.toLowerCase()))
      setFilterd(FilterdItem)
    }
  },[search])



  return (
    <section className='home-main'>
        <div className='category-search'>
          <FaSearch size={30} color='white' className="text-gray-500 mr-2" />
          <input type='text'
          placeholder='Search........'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div className='home-heading'>
          <h2>Categories</h2>
          <div>
            <HomeMain categories = {filterd}/>
          </div>
        </div>
    </section>
  )
}

export default Home
