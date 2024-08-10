import React from 'react'

export default function About() {
  return (
    <>
      <div className='bg-[#1ABC9C] pt-52 pb-28'>
        <div className='text-center'>
          <h1 className='mb-3 text-white font-bold text-4xl'>ABOUT COMPONENT</h1>
          <div className='flex justify-center items-center'>
            <div className='line bg-white me-3'></div>
            <i className="fa-solid fa-star text-white me-3"></i>
            <div className='line bg-white'></div>
          </div>
        </div>
        <div className='container mx-auto py-8 text-white'>
          <div className='row px-10'>
            <div className='w-full mb-3 md:w-1/2 md:px-14'>
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className='w-full md:w-1/2 md:px-14'>
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
