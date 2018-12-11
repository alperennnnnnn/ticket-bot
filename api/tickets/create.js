const {json, send} = require('micro');

const Ticket = require('../../data/data.js');
const connectWithDB = require('../../data/db');

connectWithDB();

module.exports = async (req, res) => {
    const data = await json(req);
    let lamp = new Ticket(data);

    return lamp.save()
      .then(() => {
          return send(res, 200,  'created');
      })
      .catch((e) => {
          return send(res, 400, e.errors);
      });
};
