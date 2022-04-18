import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortAscendingSvg } from '../../assets/svg/Svgs';
import { getTasksAsync } from '../../store/tasks-slice';
import AddTask from './AddTask';

import Task from './Task';

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  return (
    <div>
      <header className='mb-8 mt-5'>
        <h1 className='text-2xl font-bold'>Tasks</h1>
      </header>
      <article className='align-center mx-auto mb-6 max-w-sm sm:flex'>
        <AddTask />
        <button className='sm:border-l-none rounded border-gray-200  bg-white p-3 shadow-md  dark:border-gray-700 dark:bg-gray-800 sm:rounded-l-none'>
          {sortAscendingSvg}
        </button>
      </article>

      <article>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </article>
    </div>
  );
};

export default TasksList;
