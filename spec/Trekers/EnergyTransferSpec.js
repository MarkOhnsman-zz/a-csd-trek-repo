let EnergyTransfer = require("../../models/EnergyTransfer.js");
let Shield = require("../../models/Shield.js");

describe("EnergyTransfer", () => {
   it("increases shield power", () => {
        let shield = new Shield();
        EnergyTransfer.transfer(shield, {addEnergy(){}}, 1);
        expect(shield.energyLevel).toBe(5001);
   });
   it("decreases ship power", () => {
        let ship = {addEnergy(){},energyLevel:42};
        spyOn(ship, "addEnergy");
        let shield = new Shield();
        EnergyTransfer.transfer(shield, ship, 1);
        expect(ship.addEnergy).toHaveBeenCalledWith(-1);
   })
})