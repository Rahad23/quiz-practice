import React from 'react';
import BlogQuestion from '../blogQuestion/BlogQuestion';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl text-black font-bold text-center mt-8'>Question Section</h1>
            </div>
            <BlogQuestion></BlogQuestion>
        </div>
    );
};

export default Blog;