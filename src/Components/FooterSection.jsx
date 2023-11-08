import React from 'react'
import location from '../assets/location.png';
import message from '../assets/sms.png';
import phone from '../assets/call.png';
import socials from '../assets/socials.png'

const FooterSection = () => {
  return (
    <div className='md:grid md:grid-cols-3'>
  
    <div className='md:col-span-1'>   
    <div className='grid grid-cols-1 gap-4 p-12'>
        <div className='flex'>
        <div className=''>
     <img src={location} className='' /> 
        </div>
        <div>
            <p>3517 W. Gray St. Utica</p>
        </div>
        </div>

        <div className='flex'>
        <div className=''>
     <img src={message} className='' /> 
        </div>
        <div>
            <p>Getsella@Connectplusonline.com</p>
        </div>
      </div>

      
      <div className='flex'>
        <div className=''>
             <img src={phone} className='' /> 
        </div>
        <div>
            <p>(+33)7 65 55 72 67</p>
        </div>
    </div>
      </div>
      </div>

      <div className='md:col-span-1'></div>
      <div className=' md:col-span-1 px-14'>
        <h4 className=' text-[#1F2B5E] text-xl font-bold p-4'>Our social media</h4>
      <img src={socials} className='' /> 
    </div>

  </div>
  )
}

export default FooterSection