import React from 'react'

const HerosectionContent = () => {
  return (
    <div className='grid place-content-center'>
        <main className='grid place-content-center text-center text-white mt-28 gap-4'>
            <h4 className='font-[600] text-3xl'>Welcome to Getsella</h4>
            <h1 className='font-bold text-6xl'>EXPLORE OUR HOW TO USE</h1>
            <p className='font-[400] text-xl'>Discover the future of seamless operations with Getsella. Our innovative solutions </p>
            <p className='font-[400] text-xl'>are designed to simplify, optimize, and supercharge your business processes.</p>
        </main>
        <div className='flex justify-center items-center'>
           <button className='text-center text-blue-950 text-xl outline-none rounded-md  w-40  mt-4 h-16  hover:bg-blue-600 bg-white font-bold'>Download</button>

        </div>
    </div>
  )
}

export default HerosectionContent