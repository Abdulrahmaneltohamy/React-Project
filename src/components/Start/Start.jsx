import React from 'react'
// import avatarimage from '../../assets/images/avataaars.png'
import test from '../../assets/images/avatar2.jpg'

export default function Start() {
  return (
    <>
      <div className='bg-[#1ABC9C] pt-36 pb-16'>
        
        <div className='text-center mx-auto container'>
        <img src={test} className='w-[250px] h-[250px] rounded-full mx-auto mb-7' alt="" />
          <h1 className='mb-3 text-white font-bold text-4xl uppercase'>start Framework</h1>
          <div className='flex justify-center items-center mb-3'>
            <div className='line bg-white me-3'></div>
            <i className="fa-solid fa-star text-white me-3"></i>
            <div className='line bg-white'></div>
          </div>
          <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  )
}
