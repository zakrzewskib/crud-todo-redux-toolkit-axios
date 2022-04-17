import React from 'react';

import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className='flex'>
      <Navbar />
      <main className='container mx-auto bg-gray-40 dark:bg-gray-700 text-gray-900 dark:text-white'>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
