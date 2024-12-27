import React from 'react'
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Reload from "../components/Reload";
import Newarrivals from "../components/Newarrivals";
import Bestseller from "../components/Bestseller";


const Home = () => {
  return (
    <>
     <Menu/>
     <Banner/>
     <Reload/>
     <Newarrivals/>
     <Bestseller/>
    </>
  )
}

export default Home