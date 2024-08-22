const Task = require("../models/task");

async function getTask(req, res, next) {
  try {
    console.log(`Fetching task with ID: ${req.params.id}`); // Log task ID
    const task = await Task.findById(req.params.id);
    if (!task) {
      console.error("Task not found"); // Log if task not found
      return res.status(404).json({ message: "Task not found" });
    }
    res.task = task;
    next();
  } catch (err) {
    console.error("Error fetching task:", err.message); // Log error
    return res.status(500).json({ message: err.message });
  }
}

module.exports = getTask;
