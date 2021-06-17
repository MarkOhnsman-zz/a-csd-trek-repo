let Shield = require("../../models/Shield.js");

let shield;
describe("shield", () => {
  // REVIEW test duplications (pre-test)
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

  it("Initial Energy Level of 5000", () => {
    expect(shield.energyLevel).toBe(5000);
  });

  describe("Energy Transfer", () => {
    it("Can have energy added", () => {
      shield.transferEnergy(1000);
      expect(shield.energyLevel).toBe(6000);
    });

    it("Can have energy removed", () => {
      shield.transferEnergy(-1000);
      expect(shield.energyLevel).toBe(4000);
    });

    it("Cannot have energy increased above 10000", () => {
      shield.transferEnergy(5001);
      expect(shield.energyLevel).toBe(10000);
    });

    it("Cannot have energy decreased below 0", () => {
      shield.transferEnergy(-5001);
      expect(shield.energyLevel).toBe(0);
    });

    it("Returns energy surplus if above 10000", () => {
      let returned = shield.transferEnergy(6000);
      expect(returned).toBe(1000);
    });

    xit("Only returns available energy", () => {});
  });
});
