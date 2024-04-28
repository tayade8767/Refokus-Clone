/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { PiArrowBendDownRightBold } from "react-icons/pi";
function Button({btnname = "Start a Project"}) {
  return (
    <div className='w-40 py-2 px-4 rounded-full text-black flex justify-between items-center bg-zinc-100 select-none hover:text-white  transition duration-700 ease-in-out hover:bg-zinc-700'>
    
        <span className='text-sm font-medium'>{btnname}</span>
        {/*    -->   arrow is remening here   */}
        <PiArrowBendDownRightBold />
        {/*   go to react-icons and then import it and after that use it      */}
    
    </div>
  )
}

export default Button