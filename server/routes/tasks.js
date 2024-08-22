const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const getTask = require("../middleware/getTask");
const asyncHandler = require("../middleware/asyncHandler");
const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
});

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks.map((task) => ({ ...task.toObject(), id: task._id })));
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { error } = taskSchema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const task = new Task(req.body);
    const newTask = await task.save();
    res.status(201).json({ ...newTask.toObject(), id: newTask._id });
  })
);

router.put(
  "/:id",
  getTask,
  asyncHandler(async (req, res) => {
    const { error } = taskSchema.validate(req.body);
    if (error) {
      console.error("Validation error:", error.details[0].message);
      return res.status(400).json({ message: error.details[0].message });
    }

    Object.assign(res.task, req.body);
    const updatedTask = await res.task.save();
    res.json({ ...updatedTask.toObject(), id: updatedTask._id });
  })
);

router.delete(
  "/:id",
  getTask,
  asyncHandler(async (req, res) => {
    if (res.task && typeof res.task.remove === "function") {
      await res.task.remove();
    } else {
      await Task.findByIdAndDelete(req.params.id);
    }

    res.json({ message: "Task deleted", id: req.params.id });
  })
);

module.exports = router;
