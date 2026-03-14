import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Menus from './Menus';

const Navbar = () => {
  const [value, setvalue] = useState(false);
  
  return (
    <div>

      <div className='flex justify-between m-2'>
        <span className='flex justify-center '>
          <span onClick={() => setvalue(!value)}>
            {
              value ? [<Menu></Menu> 
              ,<Menus className={``}></Menus> ]
                : <Menu className='md:hidden'></Menu>
            }



          </span>


          <h2 className='text-xl font-bold ml-5 text-cyan-800'>My Navbar</h2>

        </span>

       
          <div className='hidden lg:flex gap-5  text-cyan-800'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Settings</a>

          </div>

       
        <button className='btn btn-ghost text-l  text-cyan-800'>Sign in</button>

      </div>




    </div>
  );
};

export default Navbar;