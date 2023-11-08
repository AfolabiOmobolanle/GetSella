import React from 'react'

const Footer = () => {
  return (
    <div className=' text-[##1E1E1E] md:grid md:grid-cols-2 h-[30vh] pt-8 px-8 '>
    <div className='md:col-span-1 '>
    <h1 className=' font-bold text-[2.5rem] px-8'>Join Our NewsLetter.</h1>
    <p className=' font-[600] tracking-normal px-8'>We’ll send you a nice letter once per week. No spam</p>
    </div>

    <div className=' md:col-span-1'>
        <input type="email" name="email" id="email" placeholder='Enter your email.' className='w-[25rem] bg-indigo-50 h-16 p-2 border rounded placeholder-blue-950 font-bold text-center text-lg focus:outline-none:'
        />
        <button type="submit" className='text-center text-white text-xl outline-none rounded-md  w-40  mt-4 h-16  hover:bg-blue-600 bg-blue-950 font-bold'>Subscribe.</button>
    
    </div>

    </div>
  )
}

export default Footer