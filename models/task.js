const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    dueDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = new mongoose.model('Task', taskSchema);