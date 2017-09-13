'using strict';

const _ = require('lodash');
const types = require('./types');

class Interpretator {

  process(environment) {
    console.log('start !');
    return _.transform(environment, (result, value) => {
      if (_.isNil(value)) {
        return;
      }

      switch (value.type) {
        case 'variable':
          result[value.source] = types.variable(value).format();
          break;
        case 'block':
          result[value.source] = types.block(value).format();
          break;
        case 'equals':
          result[value.source] = types.equals(value).format();
          break;
        default:
      }
    }, {});
  }
}

module.exports = Interpretator;
