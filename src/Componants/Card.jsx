/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

function Card({item, start, para, hover}) {
  return (
    <div className= {`${item} bg-zinc-800 rounded-xl hover:${hover} transition duration-700 hover:p-7 p-6 min-h-[30rem] flex flex-col justify-between`}>
    
        <div className='w-full'>
            <div className='flex justify-between items-center w-full'>
               <h1>One Love</h1>
               <MdArrowRightAlt />
            </div>
            <h1 className='text-3xl font-medium mt-5'>WhatEver Heading.</h1>
        </div>
        <div className='down w-full'>
            
            {
                start && (
                    <>
                      <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                      <button className='border-[1px] py-2 px-5 border-zinc-50 rounded-full mt-5'>Contact Us</button>
                    </>
                )
            }

            {
                para && (
                    <p className='font-medium text-sm text-zinc-500'>lorem gfg gfaag ergfreefggol errgsrbsrb rgrgrtt rgtbgb</p>
                )
            }
        </div>
    
    </div>
  )
}

export default Card