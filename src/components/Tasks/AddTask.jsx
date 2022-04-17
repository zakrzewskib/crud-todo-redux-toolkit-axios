import React from 'react';
import { addSvg } from '../../assets/svg/Svgs';

const AddTask = () => {
  return (
    <form className='mx-auto mb-6 flex max-w-sm items-center justify-between rounded-lg border-gray-200 bg-white shadow-md  dark:border-gray-700 dark:bg-gray-800'>
      <input
        tabIndex='0'
        className='flex-grow rounded-lg bg-white p-3 focus:border-blue-500 focus:ring-blue-500  dark:bg-gray-800 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        placeholder='Add new task'
        required
        autoFocus
      />
      <button className='cursor-pointer p-3'>{addSvg}</button>
    </form>
  );
};

export default AddTask;
