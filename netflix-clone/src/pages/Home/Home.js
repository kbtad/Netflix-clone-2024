import React from 'react'
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/banner/Banner";
import Rowlist from "../../components/Rows/Rowlist/Rowlist";
// import Rowlist from "../../components/Rowlist/Rowlist";
// import Rowlist from "../../components/Rows/Rowlist/Rowlist";
const Home = () => {
  return (
    <>
        <Header />
        <Banner />
        <Rowlist />
        <Footer />
        
    </>
  )
}

export default Home