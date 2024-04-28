/* eslint-disable no-unused-vars */
import React from 'react'
import { im } from "../Images/im"

function Work() {

    var images = [

        { url:"https://wallpapercave.com/wp/QDO40f0.jpg", top:"50%", left:"50%", isActive:true },   // give the images url form the website 
        { url:"", top:"56%", left:"44%", isActive:false },
        { url:"", top:"45%", left:"56%", isActive:false },
        { url:"", top:"60%", left:"53%", isActive:false },
        { url:"", top:"43%", left:"40%", isActive:false },
        { url:"", top:"65%", left:"55%", isActive:false },
        
    ];

  return (
    <div className='w-full mt-20'>
    
      <div className='relative max-w-screen-xl mx-auto text-center text-white'>
        <h1 className='text-[27vw] leading-none font-medium tracking-tight select-none'>Work</h1>
        <div className='absolute top-0 w-full h-full'>
            {images.map((item, index) => ( item.isActive && <img key={index} className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' style={ {top:item.top , left:item.left} } src={item.url} alt='image for hovering'/>))}
        </div>
      </div>
    
    </div>
  )
}

export default Work;