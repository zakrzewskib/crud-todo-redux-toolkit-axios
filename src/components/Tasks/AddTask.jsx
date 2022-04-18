import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSvg } from '../../assets/svg/Svgs';
import { addTaskAsync } from '../../store/tasks-slice';

const AddTask = () => {
  const dispatch = useDispatch();

  const [taskContent, setTaskContent] = useState('');

  const addTask = (event) => {
    event.preventDefault();

    dispatch(addTaskAsync({ content: taskContent }));

    setTaskContent('');
  };

  return (
    <form
      className='border-r-none mx-auto flex max-w-sm flex-grow items-center justify-between rounded-lg rounded-r-none border-gray-200 bg-white shadow-md  dark:border-gray-700 dark:bg-gray-800'
      onSubmit={addTask}
    >
      <input
        value={taskContent}
        onChange={(event) => {
          setTaskContent(event.target.value);
        }}
        tabIndex='0'
        className='flex-grow rounded-lg bg-white p-3 focus:border-blue-500 focus:ring-blue-500  dark:bg-gray-800 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        placeholder='Add new task'
        required
        autoFocus
      />
      <button className='p-3'>{addSvg}</button>
    </form>
  );
};

export default AddTask;
