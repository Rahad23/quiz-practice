import React, { useContext } from 'react';
import { DataContext } from '../main/Main';
import TotalQuiz from '../totalQuiz/TotalQuiz';

const Statistics = () => {
    const dataRecive = useContext(DataContext);
     const counT = dataRecive.data;
    //  console.log(counT.id)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto'>
            {
                counT.map(total=> <TotalQuiz key={total.id} total={total}></TotalQuiz>)
            }
            
        </div>
    );
};

export default Statistics;