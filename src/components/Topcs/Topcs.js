import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';

const Topcs = () => {
    const quizs = useLoaderData()
    const { data } = quizs
    const { questions, total } = data
    return (
        <div className='flex'>
            <div>
            <h1 className='text-4xl w-1/2 lg:w-2/3 text-center ml-20 lg:ml-40 mb-3 text-orange-600'>{data.name}</h1>
            <p className='text-2xl w-1/2 lg:w-2/3 text-center ml-20 lg:ml-40 mb-3 text-orange-400'>Total quiz : {total}</p>
            {
                questions.map(question => <QuizCart
                    key={question.id}
                    questions={question}
                   
                ></QuizCart>)  
            }
            </div>
        </div>
    );
};

export default Topcs;