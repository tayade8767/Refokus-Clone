/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import Stripe from './Stripe';
import Stripe1 from './Stripe1';

import Marquee from "react-fast-marquee";

function Stripes() {

    var data = [
        { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 48 },
        { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 2 },
        { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 11 },
        { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 11 },
        { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 48 },
        { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 2 },
        { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 11 },
    ];

    var data1 = [
      "Akash","Web Design","2D/3D Animations","Creative Strategy","Creative Development","AI Strategy & Integration","Branding & Art Direction","2D/3D Animations","Webflow Development"
    ];

  return (
    <div className='w-full '>
        
    <Marquee speed={70}  >
      <div className=' mt-20 flex item-center'>
        { data.map((item,index) => (
          <Stripe item={ item } key={index} />
        )) }
      </div>
    </Marquee>


    <Marquee speed={150} gradient={false}>
          <div className='flex item-center'>
            { data1.map((item,index) => (
              <Stripe1 item={item} key={index}/>
            )) }
          </div>
    </Marquee>

    </div>
  )
}

export default Stripes