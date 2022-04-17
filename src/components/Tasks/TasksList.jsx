import React from 'react';
import Task from './Task';

const TasksList = () => {
  const tasks = [
    { id: 1, content: 'Practice React' },
    { id: 2, content: 'Learn Redux Toolkit' },
  ];

  return (
    <div>
      <header className='mb-8 mt-5'>
        <h1 className='text-2xl font-bold'>Tasks</h1>
      </header>
      <article className=''>
        {tasks.map((task) => (
          <Task key={task.id} content={task.content} />
        ))}
      </article>
    </div>
  );
};

export default TasksList;
