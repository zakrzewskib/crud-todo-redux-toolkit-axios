import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasksAsync } from '../../store/tasks-slice';

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
      <article className=''>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </article>
    </div>
  );
};

export default TasksList;
