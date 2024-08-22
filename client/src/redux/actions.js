import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const SET_FILTER = "SET_FILTER";

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/tasks`);
    dispatch({ type: FETCH_TASKS, payload: response.data });
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const addTask = (title, description, status) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/tasks`, {
      title,
      description,
      status,
    });
    dispatch({ type: ADD_TASK, payload: response.data });
  } catch (err) {
    console.error("Error adding task:", err);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/tasks/${taskId}`);
    dispatch({ type: DELETE_TASK, payload: taskId });
  } catch (err) {
    console.error("Error deleting task:", err);
  }
};

export const editTask =
  (taskId, title, description, status) => async (dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/tasks/${taskId}`, {
        title,
        description,
        status,
      });
      dispatch({ type: EDIT_TASK, payload: response.data });
    } catch (err) {
      console.error("Error editing task:", err);
    }
  };

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
