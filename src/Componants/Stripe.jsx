/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'

function Stripe({ item }) {
  return (
      <div className='w-[17%] py-4 px-5 flex items-center text-white justify-between gap-10 border-t-[1.2px] border-b-[1px] border-r-[1px] border-zinc-700'>
    
        <img src={ item.url } />
        <span>{ item.number } </span>
   
      </div>
  )
}

export default Stripe

