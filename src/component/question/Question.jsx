import React from 'react';
import SelectQuiz from '../selectQuiz/SelectQuiz';

const Question = ({quiz}) => {
    // console.log(quiz.correctAnswer);
    return (
        <div className='mb-8'>
        <div className="card phone-3 bg-slate-400 rounded-xl p-6 w-[750px]">
           <div className= ''>
            <div className='top-2'>
            <h1 className='text-lg text-white font-bold'>Question</h1>
            <h1 className='text-xl text-w text-yellow-100 mt-9'>{quiz.question}</h1>
            <div className='grid grid-cols-2 gap-6'>
                {
                    quiz.options.map(select=><SelectQuiz key={quiz.options.id} select={select} correctAns={quiz.correctAnswer}></SelectQuiz>)
                }
           </div>
            </div>
           </div>
         </div>
        
        </div>
    );
};

export default Question;