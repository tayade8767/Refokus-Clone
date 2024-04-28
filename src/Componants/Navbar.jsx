/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button';

function Navbar() {


const navbar = ["Home", "Work", "Culture", "","News"];


  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between text-white border-b-[2px] border-zinc-700'>

      <div className='nleft flex items-center'>
        <img src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg' alt='logo'/>
        <div className='links flex items gap-14 ml-20'>
          { navbar.map((item,index )=> 
              item.length === 0 
              ? <span key={index} className='bg-zinc-700 h-7 w-[2px]'></span>
              : <a key={index} className='text-sm flex items-center gap-1' href='#'>
                { index === 1 && <span style={{boxShadow : "0 0 0.25 #00FF19"}} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>}
                { item }</a>
          ) }
        </div>
      </div> 

      <Button/>

    </div>
  )
}

export default Navbar 