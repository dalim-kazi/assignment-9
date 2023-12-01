import React from 'react';

const Options = ({ option, handlerGive}) => {
   
    return (
        <div>
            
            <div className='h-auto p-2 border-2'>
                <button onClick={()=>handlerGive(option)} > <input type="checkbox" name="" id="" /> {option}</button>
            </div>
        </div>
    );
};

export default Options;