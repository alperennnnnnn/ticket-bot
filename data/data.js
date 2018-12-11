const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TicketSchema = new Schema({
    url: {
        type: String,
        required: [true, 'Please provide an URL'],
    },
    firstCraweledAt: {
        type: Date,
        required: [true, 'Please provide firstCraweledAt date'],
        default: Date.now(),
    },
    lastCraweledAt: {
        type: Date,
        required: [true, 'Please provide firstCraweledAt date'],
    },
    status: {
        type: String,
        default: 'new',
        enum: ['new', 'not_relevant', 'approved'],
    },
    screenshotUrl: {
        type: String,
        required: [true, 'Please provide screenshotURL'],
    },
});

const initColl = () => {
    if (mongoose.models.Ticket) {
        return mongoose.model('Ticket');
    } else {
        return mongoose.model('Ticket', TicketSchema);
    }
};

module.exports = initColl();
