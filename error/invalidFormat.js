'using strict';

class InvalidFormat extends Error {
  constructor(error) {
    super('Invalid format exteprion: '.concat(this._error));
  }
}

module.exports = InvalidFormat;
