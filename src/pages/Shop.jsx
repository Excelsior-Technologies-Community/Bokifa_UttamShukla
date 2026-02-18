import React, { useState } from 'react'
import Header from '../components/Header'
import Leftsidebar from '../components/Leftsidebar';
import PaginationGrid from '../components/PaginationGrid';
import BottomStaticCard from '../components/BottomStaticCard';

const Shop = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(600);

  return (
    <>
      {/* <Header /> */}
      <h1 className='h-auto text-6xl  font-extralight text-center py-5 '>Products</h1>
      <div className='font-lora flex gap-5 items-start p-4'>
        <Leftsidebar minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
        <PaginationGrid minPrice={minPrice} maxPrice={maxPrice} />
      </div>
      <BottomStaticCard />
    </>
  )
}

export default Shop