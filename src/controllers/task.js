const TaskModel = require('../models/taskModel');
const logger = require('../config/logger');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TaskModel.find({});
    res.send([...allTasks]);
  } catch (err) {
    logger.error(err);
  }
};

const getTask = async (req, res) => {
  try {
    const getOneTask = await TaskModel.findById({ _id: req.params.id });
    if (!getOneTask) {
      res.status(400).send('no task found');
    }
    res.send(getOneTask);
  } catch (err) {
    logger.error(err);
  }
};

const addTask = async (req, res) => {
  try {
    const taskModel = new TaskModel(req.body);
    await TaskModel.create(taskModel);
    res.send(taskModel);
  } catch (err) {
    logger.error(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedDocument = await TaskModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    if (!updatedDocument) {
      res.status(404).send('Task not found');
    }
    res.send(updatedDocument);
  } catch (err) {
    logger.error(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedDocument = await TaskModel.findOneAndDelete({ _id: req.params.id }, req.body);
    if (!deletedDocument) {
      res.status(404).send('Task not found');
    }
    res.send(deletedDocument);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
