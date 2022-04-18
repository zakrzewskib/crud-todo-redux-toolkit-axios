import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { checkSvg, loadingSpinner } from '../assets/svg/Svgs';
import Task from '../components/Tasks/Task';
import { getTaskByIdAsync, updateTaskByIdAsync } from '../store/tasks-slice';

const TaskDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { taskId } = params;
  const [task, setTask] = useState(null);
  const [status, setStatus] = useState('loading');
  const [taskContent, setTaskContent] = useState('');

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(getTaskByIdAsync({ taskId })).then((response) => {
      setTask(response.data);
      setTaskContent(response.data.content);
      setStatus('loaded');
    });
  }, [dispatch, taskId]);

  const handleEdit = () => {
    dispatch(
      updateTaskByIdAsync({
        id: task.id,
        content: taskContent,
        date: Date.now(),
        firebaseId: taskId,
      })
    );
    // goBack();
  };

  return (
    <div className='mx-auto mt-32 max-w-sm'>
      <div className='flex-column flex justify-center'>
        {status === 'loading' ? (
          loadingSpinner
        ) : (
          <section className='mb-2'>
            <textarea
              id='message'
              cols='40'
              className='rounded-lg border border-gray-200 bg-white p-6 font-normal text-gray-700 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700  dark:bg-gray-800 dark:text-gray-400  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              value={taskContent}
              onChange={(event) => {
                setTaskContent(event.target.value);
              }}
            ></textarea>
          </section>
        )}
      </div>
      <div className='flex items-center justify-between px-3'>
        <button onClick={goBack} className='hover:underline'>
          Go back
        </button>
        <a href='/tasks' onClick={handleEdit}>
          {checkSvg}
        </a>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
