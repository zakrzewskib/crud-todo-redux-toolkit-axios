import React from 'react';

const Task = (props) => {
  const deleteButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='box-content h-5 w-5 cursor-pointer rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-700'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
      />
    </svg>
  );

  const editButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='box-content h-5 w-5 cursor-pointer rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-700'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
      />
    </svg>
  );

  return (
    <div
      class='mx-auto mb-2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md
    dark:border-gray-700 dark:bg-gray-800 '
    >
      <p class='mb-2 font-normal text-gray-700 dark:text-gray-400'>{props.content}</p>
      <div className='align-center flex justify-between'>
        {editButton} {deleteButton}
      </div>
    </div>
  );
};

export default Task;
