import React from 'react';
import { useLoaderData } from 'react-router-dom';
import gif from '../../img/70305-love-emoji.gif';
import Question from './../question/Question';

const Quiz = () => {
    const getQuiz = useLoaderData();
    // console.log(getQuiz.data);
    return (
        <div className='mt-16 container flex justify-center flex-col items-center'>
            <div className='mb-10'>
            <div className="card card-side bg-slate-400 shadow-xl">
            <figure><img className='w-32' src={getQuiz.data.logo} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="flex justify-center items-center card-title text-white">{getQuiz.data.name}
                    <img className='w-14 rounded-full' src={gif} alt="" />
                </h2>
                <p className='text-2xl text-white'>Total Quiz: {getQuiz.data.questions.length}</p>
            </div>
            </div>
            </div>
            {
                getQuiz.data.questions.map((quiz, serial)=><Question key={serial} quiz={quiz}></Question>)
            }
        </div>
    );
};

export default Quiz;