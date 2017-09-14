'using strict';

const _ = require('lodash');
const types = require('./types');

class Interpretator {

  process(environment) {
    return _.transform(environment, (result, value) => {
      if (_.isNil(value)) {
        return;
      }

      let formatter = types[value.type];
      if (_.isNil(formatter)) {
        return;
      }
      result[value.source] = formatter(value).format();
    }, {});
  }
}

module.exports = Interpretator;
