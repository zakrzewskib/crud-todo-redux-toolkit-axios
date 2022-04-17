import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = (props) => {
  return (
    <li>
      <Link
        to={props.link}
        class='flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
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
      <div class='h-screen overflow-y-auto bg-gray-50 py-4 px-3 dark:bg-gray-800'>
        <div class='mb-5 flex items-center pl-2.5'>
          <img src={require('../../assets/img/icons8-todo-list-96.png')} class='mr-3 h-6 sm:h-7' alt='Todo Logo' />
          <span class='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Todo</span>
        </div>
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
