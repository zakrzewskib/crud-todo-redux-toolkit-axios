import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { getTasksAsync } from '../../store/tasks-slice';
import { tasksActions } from '../../store/tasks-slice';
import SortButton from '../UI/SortButton';
import AddTask from './AddTask';

import Task from './Task';
import { loadingSpinner } from '../../assets/svg/Svgs';

const TasksList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(tasksActions.sortTasks({ isSortingAscending }));
  });

  const handleSortTasks = () => {
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
    dispatch(tasksActions.sortTasks({ isSortingAscending }));
  };

  const [status, setStatus] = useState('loading');

  useEffect(() => {
    dispatch(getTasksAsync()).then(setStatus('loaded')).catch(setStatus('error'));
  }, [dispatch]);

  return (
    <div>
      <header className='mb-8 mt-5'>
        <h1 className='text-2xl font-bold'>Tasks</h1>
      </header>
      <article className='align-center mx-auto mb-6 max-w-sm sm:flex'>
        <AddTask />
        <SortButton isSortingAscending={isSortingAscending} onClick={handleSortTasks} />
      </article>

      <article className='text-center'>
        {status === 'loading' && <div className='flex justify-center'>{loadingSpinner}</div>}
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </article>
    </div>
  );
};

export default TasksList;
