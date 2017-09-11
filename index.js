'use strict';

const utils = require('./utils');

let args;
try {
  args = utils.parseCmd(process.argv);
} catch (e) {
  console.log('parse cmd error...');
  console.log(e.message);
  process.exit();
}

const url = args['mongo_url'];
if (url) {
  process.env.MONGOLAB_URI = url;
}

const _ = require('lodash');

console.log('execution complete');
process.exit();
