const mongoose = require('mongoose');
const url = `mongodb://bot:herthatickets2018@ds131784.mlab.com:31784/ticket-bot`;

const connectWithDB = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(url, {useNewUrlParser: true});
};

module.exports = connectWithDB;
