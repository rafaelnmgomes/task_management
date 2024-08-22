import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

function Filterbar() {
  const dispatch = useDispatch();

  const handleFilterClick = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className="filter-button bg-blue-500 
                hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l"
        onClick={() => handleFilterClick("all")}
      >
        All
      </button>
      <button
        className="filter-button bg-blue-500 hover:bg-blue-600
                text-white font-bold py-2 px-4"
        onClick={() => handleFilterClick("todo")}
      >
        To Do
      </button>
      <button
        className="filter-button bg-blue-500 hover:bg-blue-600
                text-white font-bold py-2 px-4"
        onClick={() => handleFilterClick("in-progress")}
      >
        In Progress
      </button>
      <button
        className="filter-button bg-blue-500 hover:bg-blue-600
                text-white font-bold py-2 px-4 rounded-r"
        onClick={() => handleFilterClick("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default Filterbar;
