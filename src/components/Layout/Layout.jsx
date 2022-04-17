import React from 'react';

import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className='flex'>
      <Navbar />
      <main className='bg-gray-40 container mx-auto text-center text-gray-900 dark:bg-gray-700 dark:text-white'>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
