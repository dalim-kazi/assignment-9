import React from 'react';
import {ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Cart = ({ catogory }) => {
    const {logo,name}=catogory
    return (
        <div className='ml-20 mr-20 bg-white w-60 h-70 p-2 rounded-lg'>
                <img className='w-60 h-50 bg-slate-300 rounded-lg' src={logo} alt="" />
              <div className='flex justify-between mt-2'>
                  <div>
                    <p>{name}</p>
                  </div>
                 <div>
                    <button className='p-1 bg-indigo-400 rounded-md'>
                        <div className='flex text-white'>
                        
                            <p><Link  to={`/quiz/${catogory.id}`}>start practice</Link> </p>
                         <ArrowLongRightIcon className="h-6 w-6 text-white" /> 
                        </div>
                    </button>
                 </div>
              </div>
        </div>
    );
};

export default Cart;