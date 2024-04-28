/* eslint-disable no-unused-vars */
import React from 'react'
import { im } from "../Images/im"

function Work() {

    var images = [

        { url:"https://wallpapercave.com/wp/QDO40f0.jpg", top:"50%", left:"50%", isActive:true },   // give the images url form the website 
        { url:"https://m5.paperblog.com/i/281/2810220/wallpaper-download-free-nature-wallpaper-full-L-bcbtZs.jpeg", top:"56%", left:"44%", isActive:false },
        { url:"https://th.bing.com/th/id/OIP.ibA6xKJ35hn0kHZEguZblgHaEK?w=340&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", top:"45%", left:"56%", isActive:false },
        { url:"https://th.bing.com/th/id/OIP.vWUjZJrLjfB1iPw1qrv5wQHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", top:"60%", left:"53%", isActive:true },
        { url:"https://th.bing.com/th/id/OIP.ZV8yw6rkXANHK-PwF0G-hwHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", top:"43%", left:"40%", isActive:false },
        { url:"https://th.bing.com/th/id/OIP.dsdW3espvkGZ4jBXQuXHXAHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", top:"65%", left:"55%", isActive:false },
        
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