import React from 'react'
import Page1 from './pages/Page1'
import Shop from './pages/Shop'
import Faqs from './pages/Faqs'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Aboutus from './pages/Aboutus'
import Product from './pages/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App