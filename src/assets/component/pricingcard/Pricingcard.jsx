import React, { use } from 'react';
import DaisyuiCard from './DaisyuiCard';
import Price from './Price';
import ResultChart from '../ResultChart/ResultChart';
import { Bounce, Zoom } from 'react-awesome-reveal';

const Pricingcard = ({pricingPromise}) => {
  const pricing=use(pricingPromise);
  // console.log(pricing);
  return (
    
    
    // <Bounce>
    //   <div className='grid md:grid-cols-2 lg:grid-cols-3 p-10 m-10'>
    //   {/* {
    //     pricing.map(price=><Price price={price}></Price>)

       
    //   } */}
    //   {
        
    //     pricing.map(price=>< DaisyuiCard price={price} key={price.id}></DaisyuiCard>)
    //   }
    //   <ResultChart></ResultChart>
      
    // </div>

    // </Bounce>
    <Zoom>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 p-10 m-10'>
      {/* {
        pricing.map(price=><Price price={price}></Price>)

       
      } */}
      {
        
        pricing.map(price=>< DaisyuiCard price={price} key={price.id}></DaisyuiCard>)
      }
      <ResultChart></ResultChart>
      
    </div>
    </Zoom>
    
  );
};

export default Pricingcard;