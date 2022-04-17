import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const URL = 'https://todo-5228a-default-rtdb.europe-west1.firebasedatabase.app';

const transformDataFromFirebase = (data) => {
  if (data === null) {
    return [];
  }
  const tasks = [];
  for (const entry of Object.entries(data)) {
    tasks.push({
      id: entry[0],
      content: entry[1].content,
    });
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
      state.tasks = action.payload.tasks || [];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const getTasksAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/tasks.json`);
    const tasks = transformDataFromFirebase(response.data);
    dispatch(tasksActions.getTasks({ tasks }));
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteTaskAsync = (data) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/tasks/${data}.json`);
    dispatch(tasksActions.deleteTask({ id: data }));
  } catch (err) {
    throw new Error(err);
  }
};

export const tasksActions = tasksSlice.actions;

export default tasksSlice;
