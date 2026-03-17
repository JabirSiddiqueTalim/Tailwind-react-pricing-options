import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
  
  return (
    <div>
       <p><CircleCheckBig />{feature}</p>
     
      
    </div>
  );
};

export default Feature;