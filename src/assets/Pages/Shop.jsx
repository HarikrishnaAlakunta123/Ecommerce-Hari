import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Popular from '../../Components/Popular/Popular'
import Offers from '../../Components/Offers/Offers'
import NewCollections from '../../Components/NewCollections/NewCollections'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'



function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <br />
      <br />
      <br />
      <br />
     <Offers/>
     <NewCollections/>
     <NewsLetter/>
     
    </div>
  )
}

export default Shop
