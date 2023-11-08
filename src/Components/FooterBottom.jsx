import React from 'react'
import copyright from '../assets/copyright.png';
import footer from '../assets/footer.png';

const FooterBottom = () => {
  return (
    <div className='md:grid md:grid-cols-3 text-[#1F2B5E] bg-[ #F1F1F1] - p-12'>
        <div className='md:col-span-'>
        <div className='grid grid-cols-1  '>

        <div className='flex'>

        <div className=''>
            <img src={copyright} className='' /> 
        </div>

        <div>
            <p>2023 Copyright by Getsella</p>
        </div>
        </div>

        </div>
    </div>
        <div className='md:col-span-1'>
        <img src={footer} className=''/>

        </div>
        <div className='md:col-span-1'>
        <h6 className='font-bold text-sm '>TERMS,PRIVACY POLICY.</h6>

        </div>

    </div>

  )
}

export default FooterBottom