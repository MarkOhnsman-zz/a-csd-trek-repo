class EnergyTransfer {
    static transfer(to, from, amount) {
        from.addEnergy(amount*-1);
        to.addEnergy(amount);
    }
}
module.exports = EnergyTransfer;