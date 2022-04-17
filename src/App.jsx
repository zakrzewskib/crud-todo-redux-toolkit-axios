import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import TasksPage from './pages/TasksPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/tasks' />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks/:taskId' element={<TaskDetailsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
