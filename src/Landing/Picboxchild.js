import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/burgerking-phonelogo-1340x2014.webp'
import playstore from "../Images/playstore.png"
import applestore from "../Images/applestore.png";

function Picboxchild() {
  return (
    <div className='bg-[rgb(240,230,204)] w-5/5 h-4/5 pt-[10px] overflow-hidden'>
        <div className='flex bg-[rgb(240,230,204)] w-[100%] h-[150vh] ml-[45%] '>
        <Link href='./'><img src={logo} alt='' className='h-3/5 w-100 mb-6' /></Link>

        <div className='flex flex-col w-[20%] pr-3'>
            <h1 className='font-extrabold text-5xl text-[rgb(82,47,45)]  mt-2 ml-0 '>
            Save £££
            With offers on demand  
            </h1>
            <div className='flex items-center gap-6 mt-[40px]'>
                <Link href='./'><img src={applestore} alt='' className='w-[140px] h-[40px] rounded-[5px] mb-4' /></Link>
               <Link href='./'><img src={playstore} alt='' className='w-[140px] h-[40px] rounded-[5px] mb-4' /></Link>   
            </div>
            <p className='text-amber-950 font-semibold mt-3 text-md '>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
        </div>
        </div>
    </div>
  )
}

export default Picboxchild