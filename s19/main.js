class Tao {

    constructor (_name, _kgWeight) {
        this.name = _name;
        this.kgWeight = _kgWeight;
    }

    funcKilogramsToPounds = (_kg = 1) => _kg * 2.20462262;

    weightInPounds() {
        return this.funcKilogramsToPounds(this.kgWeight);
    }

    weightMessage() {
        return `
            ${this.name}'s weighs ${this.kgWeight} kilograms (kg) 
            and is ${this.weightInPounds()} in pounds (lbs).
        `
    }
}

console.log(new Tao('Reden', 95).weightMessage());