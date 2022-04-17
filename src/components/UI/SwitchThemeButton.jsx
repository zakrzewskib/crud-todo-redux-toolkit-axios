import React, { useState } from 'react';
import { moonSvg, sunSvg } from '../../assets/svg/Svgs';

const SwitchThemeButton = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    document.body.classList.toggle('dark');
  };

  return (
    <div
      className='absolute top-0 right-0 flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
      onClick={changeTheme}
    >
      {theme === 'dark' ? sunSvg : moonSvg}
      {/* <span className='ml-3'>Toggle Theme</span> */}
    </div>
  );
};

export default SwitchThemeButton;
