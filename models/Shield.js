class Shield {
  _isRaised = false;
  isRaised() {
    return this._isRaised;
  }
  raise() {
    this._isRaised = true;
  }
}

module.exports = Shield;
