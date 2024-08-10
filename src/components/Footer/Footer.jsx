import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='bg-[#2C3E50] text-white text-center  py-24'>
        <div className=' container mx-auto'>
          <div className="row py-5 items-start">
            <div className='w-full md:w-1/3 mb-5'>
              <h3 className='font-bold text-2xl mb-3'>LOCATION</h3>
              <p className='mb-3'>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className='w-full md:w-1/3 mb-5'>
              <h3 className='font-bold text-2xl mb-3'>AROUND THE WEB</h3>
             <div>
             <i className="fa-brands fa-facebook mx-1 icon"></i>
             <i className="fa-brands fa-twitter mx-1 icon"></i>
             <i className="fa-brands fa-linkedin mx-1 icon"></i>
             <i className="fa-solid fa-globe  mx-1 icon"></i>
             </div>
            </div>

            <div className='w-full md:w-1/3'>
              <h3 className='font-bold text-2xl mb-3'>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#1A252F] text-white p-5'>
        <p className='text-center'>
          Copyright © Your Website 2021
        </p>
      </div>
    </>
  )
}
