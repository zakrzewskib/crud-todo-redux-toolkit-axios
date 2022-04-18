import { createSlice } from '@reduxjs/toolkit';

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

export const tasksActions = tasksSlice.actions;

export default tasksSlice;
