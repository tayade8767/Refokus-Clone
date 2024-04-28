/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='max-w-screen-xl mx-auto py-20 flex gap-1'>
    
        <Card item={"w-1/3"} start={false} para={true} hover={"bg-zinc-600"}/>
        <Card item={"w-2/3"} start={true} para={false} hover={"bg-violet-600"} />
    
    </div>
  )
}

export default Cards