import React from 'react';
import { sortAscendingSvg, sortDescendingSvg } from '../../assets/svg/Svgs';

const SortButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='sm:border-l-none rounded border-gray-200 bg-white px-1 shadow-md  dark:border-gray-700 dark:bg-gray-800 sm:rounded-l-none'
    >
      {props.isSortingAscending ? sortAscendingSvg : sortDescendingSvg}
    </button>
  );
};

export default SortButton;
