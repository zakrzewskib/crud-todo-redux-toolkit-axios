import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailsPage = () => {
  const params = useParams();
  const { taskId } = params;

  return <div>TaskDetailsPage: {taskId}</div>;
};

export default TaskDetailsPage;
