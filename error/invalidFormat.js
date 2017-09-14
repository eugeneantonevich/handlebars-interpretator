'using strict';

class InvalidFormat extends Error {
  constructor(error) {
    this._error = error;
  }

  get message() {
    return 'Invalid format exteprion: '.concat(this._error);
  }
}

module.exports = InvalidFormat;
