'using strict';

class LogicError extends Error {
  constructor(error) {
    this._error = error;
  }

  get message() {
    return 'Logic error exteprion: '.concat(this._error);
  }
}

module.exports = LogicError;
