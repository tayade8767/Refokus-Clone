/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Componants/Navbar'
import Work from './Componants/Work';
import Stripes from './Componants/Stripes';
import Products from './Componants/Products';
import Marques from './Componants/Marques';
import Cards from './Componants/Cards';
import Footer from './Componants/Footer';
import { motion } from "framer-motion";

function App() {
  return (
    <div className='w-full bg-zinc-900 font-["Satoshi"] text-white'>
    
      <Navbar />

      <Work />

      <Stripes />

      <Products />

      <Marques />

      <Cards />

      <Footer />
    
    </div>
  );
}

export default App;