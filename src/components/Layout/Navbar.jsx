import React from 'react';
import { Link } from 'react-router-dom';
import { aboutSvg, listSvg } from '../../assets/svg/Svgs';

import SwitchThemeButton from '../UI/SwitchThemeButton';

const NavbarItem = (props) => {
  return (
    <li>
      <Link
        to={props.link}
        className='flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
      >
        {props.svg}
        <span className='ml-3'>{props.title}</span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const links = [
    {
      title: 'Tasks',
      link: 'tasks',
      svg: listSvg,
    },
    {
      title: 'About',
      link: 'about',
      svg: aboutSvg,
    },
  ];

  return (
    <nav className='w-64' aria-label='Sidebar'>
      <div className='h-full overflow-y-auto bg-gray-50 py-4 px-3 dark:bg-gray-800'>
        <div className='mb-5 flex items-center pl-2.5'>
          <img src={require('../../assets/img/icons8-todo-list-96.png')} className='mr-3 h-6 sm:h-7' alt='Todo Logo' />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Todo</span>
        </div>
        <ul className='space-y-2'>
          {links.map((link) => (
            <NavbarItem key={link.title} title={link.title} link={link.link} svg={link.svg} />
          ))}
        </ul>
        <SwitchThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
