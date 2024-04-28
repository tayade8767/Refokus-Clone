/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function Marque({imageurl , index}) {
  return index === 1 ? (<Marquee speed={100} gradient={false} direction='reverse' ><div  className='w-full flex py-8 ml-10 gap-20 whitespace-nowrap overflow-hidden'>
    
  {imageurl.map(url => <img src={url} alt={imageurl} className='w-[6vw]  flex-shrink-0' />)}

</div></Marquee>) : (<Marquee speed={70} gradient={false}><div  className='w-full flex py-8 gap-20 whitespace-nowrap overflow-hidden'>
    
    {imageurl.map(url => <img src={url} alt={imageurl} className='w-[6vw]  flex-shrink-0' />)}
  
  </div></Marquee>)
}

export default Marque