require('dotenv-safe').config({allowEmptyValues: true});

const url = require('url');

const routes = {};
require('glob').glob('api/**/*.js', undefined, function(er, files) {
    files.forEach(function(file) {
        let name = file.split('.').slice(0, -1).join('.');
        if (!name.endsWith('/index')) {
            // name = name.slice(0, -6);
            routes[name] = require(`./${file}`);
        }
    });
});

module.exports = async (req, res) => {
    const {pathname} = url.parse(req.url);

    const key = Object.keys(routes).find(key => pathname === '/' + key);

    if (!key) {
        res.writeHead(404);
        res.end();

        return;
    }

    try {
        await routes[key](req, res);
    } catch (err) {
        console.error(err);
    }
};
