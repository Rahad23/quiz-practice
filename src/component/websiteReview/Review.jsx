import React from 'react';
import img from "../../img/ln1r_cnep_220704.jpg";
// import gif from "../../img/55383-web-development-animation.gif";

const Review = () => {
    return (
        <div>
            <div className="p-6 py-12 dark:bg-violet-200 shadow-sm dark:text-gray-900">
            <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <img className='shadow-md w-[250px] rounded-full' src={img} alt="" />
                <div className="space-x-2 text-center py-2 lg:py-0 ml-24">
				<p className='text-lg font-bold text-black'>If you want to become a web developer then this site is for you.<br /> Get started without delay. Best wishes to you</p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Review;