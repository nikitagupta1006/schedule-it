const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task_controller');

router.get('/', taskController.index);
router.post('/delete-task', taskController.deleteTask);
router.post('/add-task', taskController.addTask);

module.exports = router;