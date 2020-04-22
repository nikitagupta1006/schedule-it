const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/schedule-it', {
    useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', (err) => {
    console.error('Error connecting to the database');
});

db.once('open', () => {
    console.log('Connected to the database');
});