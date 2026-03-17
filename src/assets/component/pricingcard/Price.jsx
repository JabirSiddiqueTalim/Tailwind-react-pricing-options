import React from 'react';
import Feature from './Feature';

const Price = ({price}) => {
  // console.log(price);
  return (
    <div>
      <h1>{ price.name}</h1>
      <div>
         {
          price.features.map(feature=><Feature feature={feature}></Feature>)
         }
      </div>
     
      
    </div>
  );
};

export default Price;