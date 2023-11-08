import React from 'react'
import download from '../assets/download.png'


const DownloadSegment = () => {
  return (
    
    <div className='text-[#1F2B5E] md:grid md:grid-cols-2'>
        <div className='md:col-span-1'>   
      <img src={download} className='w-[40rem] h-[25rem] ' /> 
        </div>

      <div className=' md:col-span-1'>

      <h1 className=' font-bold text-4xl text-left p-6'>Download app</h1>
      <p  className='p-8 font-[400px] tracking-widest  text-[#1F2B5E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tenetur facilis? 
        Sed consequatur laudantium tempora optio assumenda ratione, dolorum, 
        eveniet modi quaerat, eaque libero quasi doloribus molestias quae tenetur harum!</p>    

      </div>
      
    </div>

    
  )
}

export default DownloadSegment