let Shield = require("../../models/Shield.js");

let shield;
describe("shield", () => {
  beforeEach(() => {
    shield = new Shield();
  });

  it("Starts Down", () => {
    expect(shield.isRaised).toBeFalse();
  });

  it("Can be raised", () => {
    shield.raise();
    expect(shield.isRaised).toBeTrue();
  });

  it("Cannot be raised if energy is 0", ()=> {
    shield._energyLevel = 0;
    shield.raise();
    expect(shield.isRaised).toBeFalse();
  })

  it("Initial Energy Level of 5000", () => {
    expect(shield.energyLevel).toBe(5000);
  });

  describe("Energy Transfer", () => {
    it("Can have energy added", () => {
      shield.addEnergy(1000);
      expect(shield.energyLevel).toBe(6000);
    });

    it("Can have energy removed", () => {
      shield.addEnergy(-1000);
      expect(shield.energyLevel).toBe(4000);
    });

    it("Cannot have energy increased above 10000", () => {
      shield.addEnergy(5001);
      expect(shield.energyLevel).toBe(10000);
    });

    it("Cannot have energy decreased below 0", () => {
      shield.addEnergy(-5001);
      expect(shield.energyLevel).toBe(0);
    });

    
  });
});
