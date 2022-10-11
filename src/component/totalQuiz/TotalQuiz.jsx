import React from 'react';

const TotalQuiz = ({total}) => {
    console.log(total);
    return (
        <div className='mt-14 mx-auto'>
            <div className="card card-compact w-96 bg-[#6a90be] shadow-xl">
        <figure><img src={total.logo} alt="Shoes" /></figure>
        <div className="card-body">
           <div className='flex justify-between p-3'>
            <h2 className="card-title text-white">{total.name}</h2>
                <h1 className='text-3xl text-black font-bold' style={{textShadow:"2px 2px 4px rgba(87, 101, 116,.5)"}}>Total quiz: <span className='text-white text-4xl'>{total.total}</span></h1>
           </div>
        </div>
        </div>
        </div>
    );
};

export default TotalQuiz;