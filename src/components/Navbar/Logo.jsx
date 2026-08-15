import React from 'react'
import { GiClothes } from 'react-icons/gi'
export default function Logo() {
  return (
    <div className='flex items-center gap-2 '>
<GiClothes size={20}   className=" text-pink-600 cursor-pointer"/>
<h1 className='text-xl font-bold'>
Fashion<span className='text-pink-600 mx-1'>store</span>

</h1>


    </div>
  )
}
