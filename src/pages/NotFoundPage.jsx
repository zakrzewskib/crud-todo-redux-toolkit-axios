import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <header className='mb-8 mt-5'>
      <h1 className='text-2xl font-bold'>Page not found!</h1>
      <Link to='/tasks' className='no-underline hover:underline'>
        Go back to tasks
      </Link>
    </header>
  );
};

export default NotFoundPage;
