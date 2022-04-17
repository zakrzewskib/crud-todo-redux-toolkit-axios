import React from 'react';
import { editSvg, trashSvg } from '../../assets/svg/Svgs';

const Task = (props) => {
  return (
    <div
      className='mx-auto mb-2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md
    dark:border-gray-700 dark:bg-gray-800 '
    >
      <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>{props.content}</p>
      <div className='align-center flex justify-between'>
        {editSvg} {trashSvg}
      </div>
    </div>
  );
};

export default Task;
