import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const getQuiz = useLoaderData();
    console.log(getQuiz);
    return (
        <div>
            quiz
        </div>
    );
};

export default Quiz;