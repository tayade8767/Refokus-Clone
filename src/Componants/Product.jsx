/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

function Product({item}) {
  return (
    <div className='w-full py-20 text-white'>
    
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className=' capitalize text-6xl font-medium'>{item.title}</h1>
            <div className='dets w-1/3'>
              <p className='mb-10'>{item.description}</p>
              <div className='flex gap-5'>
                {item.live && <Button />}
                {item.case && <Button btnname='Case Study'/>}
              </div>
            </div>
        </div>
    
    </div>
  )
}

export default Product;