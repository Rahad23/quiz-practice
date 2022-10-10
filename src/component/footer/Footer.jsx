import React from 'react';
import img from '../../img/logo (1).png';

const Footer = () => {
    return (
        <div className='mt-44'>
            <footer className="px-4 py-8 dark:bg-gray-500 dark:text-white">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			
				<img className='shadow-lg bg-white p-5 rounded-2xl' src={img} alt="" />
			
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a className='font-bold' rel="noopener noreferrer" href="/">Terms of Use</a>
				</li>
				<li>
					<a className='font-bold' rel="noopener noreferrer" href="/">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a className='font-bold' rel="noopener noreferrer" href="/">Instagram</a>
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