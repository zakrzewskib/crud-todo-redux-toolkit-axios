import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import axios from 'axios';

const URL = 'https://todo-5228a-default-rtdb.europe-west1.firebasedatabase.app';

const transformDataFromFirebase = (data) => {
  if (data === null) {
    return [];
  }
  let tasks = [];
  for (const entry of Object.entries(data)) {
    tasks = [
      {
        id: entry[1].id,
        content: entry[1].content,
        firebaseId: entry[0],
        date: entry[1].date,
      },
      ...tasks,
    ];
  }
  return tasks;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    sorted: 'ascending',
  },
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks || [];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    addTask: (state, action) => {
      state.tasks = [action.payload.task, ...state.tasks];
    },
    sortTasks: (state, action) => {
      state.tasks.sort((a, b) => {
        return action.payload.isSortingAscending ? a.date - b.date : b.date - a.date;
      });
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
    const id = data.firebaseId;
    await axios.delete(`${URL}/tasks/${id}.json`);
    dispatch(tasksActions.deleteTask({ id: data.id }));
  } catch (err) {
    throw new Error(err);
  }
};

export const addTaskAsync = (data) => async (dispatch) => {
  try {
    const task = { content: data.content, id: uuid(), date: Date.now() };
    await axios.post(`${URL}/tasks.json`, task);
    dispatch(tasksActions.addTask({ task }));
  } catch (err) {
    throw new Error(err);
  }
};

export const getTaskByIdAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/tasks/${data.taskId}.json`);
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const updateTaskByIdAsync = (data) => async (dispatch) => {
  try {
    await axios.put(`${URL}/tasks/${data.firebaseId}.json`, {
      id: data.id,
      content: data.content,
      date: data.date,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const tasksActions = tasksSlice.actions;

export default tasksSlice;
