import React from 'react';
import './Home.css'
import images from '../../images/images.png'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
const Home = () => {
    const quizCotagory = useLoaderData()
    return (
    <div>
        <div className='md:flex border-solid border-2 mt-10 ml-8 mr-8 bg-white rounded-lg '>
             <div className='p-1 w-full text-center mt-30 md:p-40'>
               <h1 className='text-orange-500 text-4xl'>Daily Quiz ,Daily</h1>
                    <h1 className='mb-5 text-orange-500 text-4xl'>Bouns-Play Today</h1>
                    <p className='text-amber-800 text-xl'>The automobile owner purchases a insurance policy, which entails signing a contract with an insurer. In the event of specified occurrences</p>
                    <button className='mt-5 text-lg bg-orange-600 p-3 pl-10 pr-10 rounded-lg hover:bg-sky-700'> 
                      <p>Get Start</p>  
                   </button>
            </div>
            <div className='w-full'>
              <img src={images} alt="" />
            </div>  
            </div>
            <div className='md:flex justify-center mb-20 mt-20'>
                {
                    quizCotagory.data.map(cotagory => <Cart key={cotagory.id}
                    catogory={cotagory}
                    ></Cart>)
               }
            </div>
     </div>
    );
};

export default Home;