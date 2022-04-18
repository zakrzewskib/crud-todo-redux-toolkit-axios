import React from 'react';
import { moonSvg, sunSvg } from '../../assets/svg/Svgs';

const SwitchThemeButton = (props) => {
  return (
    <button
      className='0 absolute top-0 right-0 text-base font-normal text-gray-900 dark:text-white '
      onClick={props.onClick}
    >
      {props.theme === 'dark' ? sunSvg : moonSvg}
    </button>
  );
};

export default SwitchThemeButton;
