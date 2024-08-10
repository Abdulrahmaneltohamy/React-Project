import React from 'react'
import imageError from '../../assets/images/404_page-not-found.png'

export default function NotFound() {
  return (
    <div className='py-28'>
      <div className='w-full md:w-1/2 mx-auto'>
        <img src={imageError} alt="" />
      </div>
    </div>


  )
}
