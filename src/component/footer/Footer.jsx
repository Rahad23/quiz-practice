import React from 'react';
import img from '../../img/logo (1).png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-44'>
            <footer className="px-4 py-8 dark:bg-gray-900 dark:text-white">
	<div className="container flex flex-col lg:flex-wrap justify-start mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-col justify-between lg:flex-row pr-3 space-x-4 sm:space-x-8">
			
				<img className='shadow-lg bg-white p-5 mx-auto lg:mx-0 rounded-2xl' src={img} alt="" />
			
			<ul className="flex mt-8 flex-wrap items-center justify-center lg:justify-end space-x-4 sm:space-x-8">
				<li>
					<a className='font-bold' rel="noopener noreferrer" href="/">Terms of Use</a>
				</li>
				<li>
					<a className='font-bold' rel="noopener noreferrer" href="/">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex mt-6 lg:mt-32 justify-center flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<Link className='font-bold' rel="noopener noreferrer" to="/">Instagram</Link>
			</li>
			<li>
				<a className='font-bold' rel="noopener noreferrer" href="/">Facebook</a>
			</li>
			<li>
				<a className='font-bold' rel="noopener noreferrer" href="/">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
        </div>
    );
};

export default Footer;