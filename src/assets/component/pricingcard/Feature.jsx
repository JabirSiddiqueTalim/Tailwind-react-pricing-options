import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
  
  return (
    <div>
       <p className='flex'><  CircleCheckBig  className='mr-2'/>{feature}</p>
     
      
    </div>
  );
};

export default Feature;