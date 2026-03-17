import React, { use } from 'react';
import Price from './Price';

const Pricingcard = ({pricingPromise}) => {
  const pricing=use(pricingPromise);
  console.log(pricing);
  return (
    
    <div>
      {
        pricing.map(price=><Price price={price}></Price>)

       
      }
      
    </div>
  );
};

export default Pricingcard;