import React from 'react';

import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className='flex dark:bg-gray-700'>
      <Navbar />
      <main className='container mx-auto text-center text-gray-900 dark:text-white'>{props.children}</main>
    </div>
  );
};

export default Layout;
