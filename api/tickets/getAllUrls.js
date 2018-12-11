const {send} = require('micro');

const Ticket = require('../../data/data.js');
const connectWithDB = require('../../data/db');

connectWithDB();

module.exports = async (req, res) => {
    const data = await Ticket.find({})
      .select({ "url": 1, "_id": 0});

    send(res, 200, data.map(d => d.url));
};
