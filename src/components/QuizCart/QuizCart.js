import React, { useState } from 'react';
import {EyeIcon } from '@heroicons/react/24/solid'
import Options from '../Options/Options';
const QuizCart = ({ questions}) => {
    const { question,correctAnswer, options } = questions
    // console.log(correctAnswer)
    const [answers, setAnswer] = useState()
    const [option,setOption]=useState()
    const handlerCorrectAnswer = (selectAnswer) => {
        const newCart = selectAnswer
        setAnswer(newCart)
    }
    const handlerGive = (selectOption) => {
        let massages;
        if (selectOption === correctAnswer) {
            massages= <p>Congratutation.<br/> Your answer is correct</p>
        }
        else {
            massages= <p>Your answer incorrect.<br/> Pleace try again</p>
        }
        setOption(massages)
   }
    return (
    <div className='flex'>
        <div className='border-4 rounded-xl w-1/2 md:w-1/2 lg:w-2/3 ml-20 lg:ml-40 text-blue-500 mb-10 h-auto lg:h-70 bg-white p-2'>
         <div className='flex md:justify-center mt-6 mb-5'>
            <p className='w-2/3 md:text-center text-lg'>{question}</p>
           <button onClick={()=>handlerCorrectAnswer(correctAnswer)} className='w-6 h-5 '> <EyeIcon className="h-6 w-6 text-blue-500 ml-5 md:ml-10 lg:ml-20" /></button>
            </div>
            <div className='grid md:grid-cols-2 gap-4 md:text-center'>
            {
                options.map(option => <Options correctAnswer={correctAnswer}
                    option={option}
                    handlerGive={handlerGive}
                ></Options>)
                    }
                </div>
                <div className='w-auto h-6 text-center mt-5 mb-2 text-red-600 text-xl'>
                    <h1>{answers}</h1>
                    </div>
            </div>
            <div className='h-40 w-100  text-center text-red-600 text-xl  ml-10 md:mt-10 mt-40'>
                    <h1 className='mt-10'>{option}</h1>
            </div>
     </div>
    );
};

export default QuizCart;