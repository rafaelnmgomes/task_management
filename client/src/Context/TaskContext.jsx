import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  fetchTasks,
  setFilter,
} from "../redux/actions";

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (title, description) => {
    dispatch(addTask(title, description));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId, updates) => {
    dispatch(editTask(taskId, updates));
  };

  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        handleAddTask,
        handleDeleteTask,
        handleEditTask,
        handleSetFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
