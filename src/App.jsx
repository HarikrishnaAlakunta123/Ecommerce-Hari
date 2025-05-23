import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './assets/Pages/Shop'
import ShopCategory from './assets/Pages/ShopCategory'
import Products from './assets/Pages/Products'
import Cart from './assets/Pages/Cart'
import LoginSingup from './assets/Pages/LoginSingup'
import Footer from './Components/Footer/Footer'
import men_banner from '../src/assets/banner_mens.png'
import women_banner from '../src/assets/banner_women.png'
import kid_banner from '../src/assets/banner_kids.png'
function App() {
 

  return (
    <>
     <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Products/>}>
<Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup></LoginSingup>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
     </div>
    </>
  )
}

export default App
