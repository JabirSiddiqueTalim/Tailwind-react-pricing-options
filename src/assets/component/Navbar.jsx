import { Menu } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      
      <div className='flex justify-between m-2'>
        <span className='flex justify-center '>
        <Menu></Menu>
        <h2 className='text-xl font-bold'>My Navbar</h2>

        </span>
        
        <div className='flex gap-5'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Settings</a>

        </div>
        <button className='btn btn-ghost text-l'>Sign in</button>

      </div>




    </div>
  );
};

export default Navbar;