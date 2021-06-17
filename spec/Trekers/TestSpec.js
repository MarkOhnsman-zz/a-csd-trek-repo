let Shield = require("../../models/Shield.js");

describe("shield", () => {
  it("Starts Down", () => {
    let shield = new Shield();
    expect(shield.isRaised()).toBeFalse();
  });

  it("Can be raised", () => {
    let shield = new Shield();
    shield.raise();
    expect(shield.isRaised()).toBeTrue();
  });
});
