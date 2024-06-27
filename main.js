class Vehicle {
    constructor(brand, model) {
        if (this.constructor === Vehicle) {
            throw new Error();
        }
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        throw new Error();
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }

    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}, ${this.doors} doors`);
    }
}

class Bike extends Vehicle {
    constructor(brand, model, type) {
        super(brand, model);
        this.type = type;
    }

    displayInfo() {
        console.log(`Bike: ${this.brand} ${this.model}, Type: ${this.type}`);
    }
}

const car1 = new Car("Toyota", "Corolla", 4);
const car2 = new Car("Honda", "Civic", 4);
const bike1 = new Bike("Yamaha", "YZF-R3", "Sport");

car1.displayInfo();
car2.displayInfo();
bike1.displayInfo();
