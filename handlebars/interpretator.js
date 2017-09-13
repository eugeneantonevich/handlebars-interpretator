'using strict';

const _ = require('lodash');
const types = require('./types');

class Interpretator {

  process(environment) {
    console.log('start !');
    return _.transform(environment, (result, value, key) => {
      if (_.isNil(value)) {
        return;
      }

      switch (value.type) {
        case 'variable':
          result[key] = types.variable(value.name).format();
          break;
        case 'text':
          result[key] = types.variable(value.text).format();
          break;
        default:
      }
      console.log(result);
    }, {});
  }
}

module.exports = Interpretator;
