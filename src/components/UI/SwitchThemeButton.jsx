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
    <button
      className='0 absolute top-0 right-0 text-base font-normal text-gray-900 dark:text-white '
      onClick={changeTheme}
    >
      {theme === 'dark' ? sunSvg : moonSvg}
    </button>
  );
};

export default SwitchThemeButton;
