import React from 'react'
import apple from '../assets/apple.png'
import google from '../assets/google.png'

const AppStore = () => {
  return (
 
    <div className=' flex justify-center item-center gap-8 h-[20vh]  bg-[#1F2B5E]'>
        
    <div className='  bg-white flex text-center text-[.6rem] outline-none rounded-md p-2 w-[12rem]  h-[4rem]'>
            <div className=''>
               <img src={apple} className='items-center px-5'/>
            </div>
    
          <div className= ''>
          <p className='text-center'>Download on the</p>
          <p className='text-center text-sm'>App Store</p>
          </div>
    </div>
    
     <div className='  bg-white text-center flex text-[.6rem] outline-none rounded-md p-4 w-[12rem] h-[4rem] '>
    
            <div className='row-span-1'>
               <img src={google} className=''/>
            </div>
    
          <div className= 'row-span-2 text-center'>
          <p>Get it on</p>
          <p className='text-sm'>Google play</p>
          </div>
     </div>
          </div>


    
  )
}

export default AppStore