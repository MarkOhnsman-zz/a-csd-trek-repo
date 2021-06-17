class Shield {
  _energyLevel = 5000;
  _isRaised = false;
  get isRaised() {
    return this._isRaised;
  }
  get energyLevel() {
    return this._energyLevel;
  }
  raise() {
    if (this._energyLevel > 0) {
      this._isRaised = true;
    }
  }
  addEnergy(proviedEnergy) {
    this._energyLevel += proviedEnergy;
    if (this._energyLevel > 10000) {
      this._energyLevel = 10000;
    } else if (this._energyLevel < 0) {
      this._energyLevel = 0;
    }
  }
}

module.exports = Shield;
