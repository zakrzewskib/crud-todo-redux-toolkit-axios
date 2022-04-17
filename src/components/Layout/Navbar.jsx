import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = (props) => {
  return (
    <li>
      <Link
        to={props.link}
        class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        {props.svg}
        <span class='ml-3'>{props.title}</span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const links = [
    {
      title: 'Tasks',
      link: 'tasks',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 10h16M4 14h16M4 18h16' />
        </svg>
      ),
    },
    {
      title: 'About',
      link: 'about',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
  ];

  return (
    <nav class='w-64' aria-label='Sidebar'>
      <div class='overflow-y-auto py-4 px-3 h-screen bg-gray-50 dark:bg-gray-800'>
        <ul class='space-y-2'>
          {links.map((link) => (
            <NavbarItem title={link.title} link={link.link} svg={link.svg} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
