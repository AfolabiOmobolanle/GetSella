import React from 'react'
import Logo from './Logo';
import Navigation from './Navigation';
import SignpButton from './SignUpButton';
import HerosectionContent from './HerosectionContent';


const Herosection = () => {
  return (
    <div  className='h-[100svh]  bg-[#1F2B5E]'>
        <div className=' sticky top-0 z-20 mx-auto pt-6 px-20  flex items-start justify-between'>
    <Logo/>
    <Navigation/>
    <SignpButton/>
        </div>
<div className=''>
    <HerosectionContent/>
</div>
    </div>
  )
}

export default Herosection