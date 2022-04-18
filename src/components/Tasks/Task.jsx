import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskAsync } from '../../store/tasks-slice';

import { editSvg, trashSvg } from '../../assets/svg/Svgs';
import { Link } from 'react-router-dom';

const Task = (props) => {
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(deleteTaskAsync(props.task));
  };

  return (
    <section className='mx-auto mb-2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800'>
      <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>{props.task.content}</p>
      <div className='align-center flex justify-between'>
        <Link to={`/tasks/${props.task.firebaseId}`}>{editSvg}</Link>
        <div onClick={deleteTask}>{trashSvg}</div>
      </div>
    </section>
  );
};

export default Task;
