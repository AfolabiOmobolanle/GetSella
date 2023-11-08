import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
      };
return( 
    <nav  className=''>
<div className='hidden  md:flex justify-between items-center text-white' > 
<ul className='flex  justify-between items-center gap-20 p-2 ml-10 font-medium '>
   <li><a href="#">Home</a></li>
   <li><a href="#">About</a></li>
   <li><a href="#" className='hover:underline-offset-auto'>How to use</a></li>
</ul>
    </div>

<div className='md:hidden'>
        <button onClick={toggleNavBar} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
</div>


{isOpen && (
    <div className='lg:hidden mt-4' > 
    <ul className='grid gap-2 px-10 '>
       <li><a href="#" className='block text-white p-2 hover:bg-blue-700'>Home</a></li>
       <li><a href="#" className='block text-white p-2 hover:bg-blue-700'>About</a></li>
       <li><a href="#" className='block text-white p-2 hover:underline-offset-auto' >How to use</a></li>
    </ul>
        </div>

      )}  
    </nav>

    
    
        )}

export default Navigation