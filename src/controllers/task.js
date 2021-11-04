const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const getTask = (req, res) => {
  res.send(`get one tasks: ${req.params.id}`);
};

const addTask = (req, res) => {
  res.json(req.body);
};

const updateTask = (req, res) => {
  res.send(`update task: ${req.params.id}`);
};

const deleteTask = (req, res) => {
  res.send(`delete task: ${req.params.id}`);
};

module.exports = {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
