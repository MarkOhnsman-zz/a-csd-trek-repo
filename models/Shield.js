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
    this._isRaised = true;
  }

  // Implementation Details (NO Test)
  receiveEnergy(energy) {
    // ANCHOR surplus
    this._energyLevel += proviedEnergy;
    if (this._energyLevel > 10000) {
      returnedEnergy = this._energyLevel - 10000;
      this._energyLevel = 10000;
    }
  }

  // Implementation Details (NO Test)
  provideEnergy(energy) {}

  // RE-name
  transferEnergy(proviedEnergy) {
    let returnedEnergy = 0;
    this._energyLevel += proviedEnergy;
    if (this._energyLevel > 10000) {
      returnedEnergy = this._energyLevel - 10000;
      this._energyLevel = 10000;
    } else if (this._energyLevel < 0) {
      this._energyLevel = 0;
    }

    return returnedEnergy;
  }
}

module.exports = Shield;
