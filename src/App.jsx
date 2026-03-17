import { Suspense } from 'react';
import './App.css'
import DaisyuiNav from './assets/component/DaisyuiNav'
import Navbar from './assets/component/Navbar'
import Pricingcard from './assets/component/pricingcard/Pricingcard';
import ResultChart from './assets/component/ResultChart/ResultChart';


function App() {
  const pricingPromise=fetch('/pricingData.json').then(res=>res.json());

  // console.log(pricingPomise);

  return (
    <>
    <Navbar></Navbar>
      
      {/* <DaisyuiNav></DaisyuiNav> */}
      {/* <h1 className='bg-red-500'>Vite + React</h1> */}
      {/* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
      <Pricingcard pricingPromise={pricingPromise}></Pricingcard>

      </Suspense>
      <ResultChart></ResultChart>
      




    </>
  )
}

export default App
