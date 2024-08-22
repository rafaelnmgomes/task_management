import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

function AddTaskModal({ isOpen, closeModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = () => {
    dispatch(addTask(title, description, status));
    setTitle("");
    setDescription("");
    setStatus("todo");
    closeModal();
  };

  return (
    <div
      className={`modal ${isOpen ? "block" : "hidden"}
        fixed inset-0 z-10 overflow-y-auto`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="modal-container bg-white
            w-full md:w-1/3 mx-auto mt-20 p-6 rounded shadow-lg"
      >
        <div className="modal-header flex justify-between items-center">
          <h3 className="text-lg font-semibold">Add New Task</h3>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div className="modal-body mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm
                        font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="border rounded w-full py-2
                                        px-3 text-gray-700"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm
                        font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="border rounded w-full py-2
                                        px-3 text-gray-700"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm
                        font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="border rounded w-full py-2
                                        px-3 text-gray-700"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
        <div className="modal-footer flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white
                        font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
