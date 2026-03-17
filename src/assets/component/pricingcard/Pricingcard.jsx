import React, { use } from 'react';
import DaisyuiCard from './DaisyuiCard';
import Price from './Price';

const Pricingcard = ({pricingPromise}) => {
  const pricing=use(pricingPromise);
  // console.log(pricing);
  return (
    
    <div className='grid md:grid-cols-2 lg:grid-cols-3 p-10 m-10'>
      {/* {
        pricing.map(price=><Price price={price}></Price>)

       
      } */}
      {
        
        pricing.map(price=>< DaisyuiCard price={price} key={price.id}></DaisyuiCard>)
      }
      
    </div>
  );
};

export default Pricingcard;