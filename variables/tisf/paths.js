const path = require("path");

const root = path.join(process.env.INIT_CWD);
const cache = path.join(root, 'cache');
const data = path.join(root, 'data');
const assets = path.join(root, 'assets');
const env = path.join(root, 'env');

module.exports = {root, data, assets, env, cache};
