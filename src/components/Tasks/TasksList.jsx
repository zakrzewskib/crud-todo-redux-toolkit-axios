import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasksAsync } from '../../store/tasks-slice';
import { tasksActions } from '../../store/tasks-slice';
import SortButton from '../UI/SortButton';
import AddTask from './AddTask';

import Task from './Task';

const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [sorted, setSorted] = useState('descending');

  const handleSortTasks = () => {
    dispatch(tasksActions.sortTasks({ sorted }));
    if (sorted === 'descending') {
      setSorted('ascending');
    } else {
      setSorted('descending');
    }
  };

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
        <SortButton sorted={sorted} onClick={handleSortTasks} />
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
