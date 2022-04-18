import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import TasksPage from './pages/TasksPage';
import TaskEditPage from './pages/TaskEditPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/tasks' />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks/:taskId' element={<TaskEditPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
