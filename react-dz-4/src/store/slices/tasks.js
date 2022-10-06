import {createSlice} from "@reduxjs/toolkit"
import {v4 as uuidv4} from "uuid"
import axios from 'axios'

const initialState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, {payload}) => {
      if (payload.completed) {
        state.tasks = state.tasks.filter(currentTask => currentTask.id !== payload.id)
      }
    },
    addTask: (state, {payload}) => {
      state.tasks = [...state.tasks, {title: payload, id: uuidv4(), completed: false}]
    },
    selectTask: (state, {payload}) => {
      state.tasks = state.tasks.map(currentTask => {
        if (payload.id === currentTask.id) {
          currentTask.completed = !payload.completed
        }
        return currentTask
      })
    },
    loadTasks: (state, {payload}) => {
      state.tasks = payload
    }
  },
})

export const {removeTask, addTask, selectTask, loadTasks} = tasksSlice.actions

export const selectTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer