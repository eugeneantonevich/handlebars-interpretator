let chai = require('chai');
let like = require('chai-like');
const _ = require('lodash');
const fs = require('fs');

const interpretator = require('../index');

let expect = chai.expect;

chai.use(like);

describe('simple resolver flow:', function () {

  before(function (done) {
    this.text1 = fs.readFileSync('./test/data/simple-test/text.html', 'utf8');
    this.environment1 = require('./data/simple-test/environment.json');
    done();
  });

  it('Resolve simple test', function () {
    // expect(interpretator.resolveHtml(this.text1, this.environment1)).to.be.like('simple-text\n');
    console.log(interpretator.resolveHtml(this.text1, this.environment1));
  });
});
