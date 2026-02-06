import React, { useState } from 'react'
import Header from '../components/Header'
import Leftsidebar from '../components/Leftsidebar';
import PaginationGrid from '../components/PaginationGrid';
import BottomStaticCard from '../components/BottomStaticCard';

const Shop = () => {




  return (
    <>
      <Header />
      <h1 className='h-auto text-6xl  font-extralight text-center py-5 '>Products</h1>
      <div className='font-lora flex gap-5 items-start p-4'>
        <Leftsidebar />
        <PaginationGrid />
      </div>
      <BottomStaticCard />
    </>
  )
}

export default Shop