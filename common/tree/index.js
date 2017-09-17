'using strict';

const iterate = require('./iterator');
const node = require('./node');
const make = require('./make');
const transform = require('./transform');

make.iterate = iterate;
make.node = node;
make.transform = transform;

module.exports = make;
