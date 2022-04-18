import React, { useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { getTasksAsync } from '../../store/tasks-slice';
import { tasksActions } from '../../store/tasks-slice';
import SortButton from '../UI/SortButton';
import AddTask from './AddTask';

import Task from './Task';

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
        <SortButton isSortingAscending={isSortingAscending} onClick={handleSortTasks} />
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
