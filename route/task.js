const express = require('express');
const router = express.Router();
const {addTask,deleteTask,getAllTasks,getTask, updateTask} = require('../controllers/task')

router.route('/').get(getAllTasks).post(addTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;