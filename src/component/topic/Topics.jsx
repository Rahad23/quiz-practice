import React, { useContext } from 'react';
import { DataContext } from '../main/Main';
import { ArrowRightIcon, BeakerIcon } from '@heroicons/react/24/solid';
import Review from '../websiteReview/Review';
import { Link } from 'react-router-dom';

const Topic = () => {
    const data = useContext(DataContext);
    const arrayObject = data.data;
    console.log(arrayObject);
    return (
        <div>
            <Review></Review>
            {
                arrayObject.map(subject=> 
                    <div className='container mx-auto mt-28'>
                    <div className="card card-side bg-gray-400 shadow-xl">
                    <figure className='shadow-xl'><img className='w-[300px]' src={subject.logo} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white text-5xl" style={{textShadow:'2px 2px 3px rgba(99, 110, 114,.5)'}}>{subject.name}</h2>
                        <div className="card-actions justify-end">
                        <Link to={`quiz/${subject.id}`} className="hover:bg-green-600 hover:text-white btn btn-success">Start-Practice <ArrowRightIcon className='w-5 ml-2 text-white' /></Link>
                        </div>
                    </div>
                    </div>
                </div>
                    )
            }
        </div>
    );
};

export default Topic;