/**
 * controller will contain actions corresponding to various routes
 */

const Task = require('../models/task');

module.exports.index = function(req, res) {

    Task.find({}, function(err, tasks) {
        if (err) {
            console.error(`Error fetching tasks from the database ${err}`);
            return;
        }
        console.log(`tasks:  ${tasks}`);
        return res.render('index', {
            tasks: tasks
        });
    });

};

module.exports.addTask = function(req, res) {

    console.log(`${req.body}`);
    Task.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function(err, newTask) {
        if (err) {
            console.error(`Error inserting new task to the database: ${err}`);
            return;
        }
        console.log(`New task added: ${newTask}`);
        return res.redirect('/');
    });

}

module.exports.deleteTask = function(req, res) {

    // multiple selections => req.body['pending-tasks] == object 
    // single-selection => req.body['pending-tasks] == string

    if (typeof req.body['pending-tasks'] == 'string') {
        let id = req.body['pending-tasks'];
        Task.findByIdAndDelete(id, (err) => {
            if (err) {
                console.error(`Error deleting task id: ${task_id}`);
                console.log(err);
                return;
            }
            return res.redirect('/');
        })

    } else if (typeof req.body['pending-tasks'] == 'object') {
        let task_ids = req.body['pending-tasks'];
        task_ids.forEach((task_id) => {
            Task.findByIdAndDelete(task_id, function(err) {
                if (err) {
                    console.error(`Error deleting task id: ${task_id}`);
                    console.log(err);
                    return;
                }
                console.log(`Successfully deleted the task:  ${task_id}`);
            });
        });
        return res.redirect('/');

    }

};