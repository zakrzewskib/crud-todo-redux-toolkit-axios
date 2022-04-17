import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const URL = 'https://todo-5228a-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';

const transformData = (data) => {
  const tasks = [];
  for (const entry of Object.entries(data)) {
    const task = entry[1];
    tasks.push(task);
  }
  return tasks;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    getTasks: (state, action) => {
      state.tasks = transformData(action.payload) || [];
    },
  },
});

export const getTasksAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(URL);
    dispatch(tasksActions.getTasks(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const tasksActions = tasksSlice.actions;

export default tasksSlice;
