/* eslint-disable no-unused-vars */
import React from 'react'

function Footer() {
  return (
    <div className='w-full select-none'>

        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto py-10 flex gap-32  '>
               <div className='basis-1/2'>
                  <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
               </div>
               <div className='basis-1/2 flex gap-4'>
                  <div className='basis-1/3'>
                     <h4 className='mb-10 text-zinc-500 capitalize'>Social</h4>
                     {["facebook", "twitter", "linkedin",].map((item,index) => (<a key={index} className='block mt-2 capitalize text-zinc-600'>{ item }</a>))}
                  </div>
                  <div className='basis-1/3'>
                     <h4 className='mb-10 text-zinc-500 capitalize'>Social</h4>
                     {["facebook", "twitter", "linkedin",].map((item,index) => (<a key={index} className='block mt-2 capitalize text-zinc-600'>{ item }</a>))}
                  </div>
                  <div className='basis-1/2 flex flex-col items-end'>
                     <p className='text-right'>df fvfdfvaff ssfda assdasv afsdgsdfg sdfgsdf sdfgsdfgg sddfsdffg.</p>
                     <img src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661c1b5fd7aa742286c16467_webflow%20refokus%20(1).png' alt='footer image' className='w-32 h-8 rounded-sm mt-5'/>
                  </div>
               </div>
            </div>
        </div>

    </div>
  )
}

export default Footer