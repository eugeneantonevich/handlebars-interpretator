let chai = require('chai');
let like = require('chai-like');
const _ = require('lodash');

let expect = chai.expect;

chai.use(like);

describe(':', function () {

  before(function (done) {
    this.root = launcher();
    done();
  });

  it('Resolve simple test', function () {
//    expect(responce).to.be.like({ defValueToOutput: 'defValue', fieldToOutput: 'testValue' });
  });
});
