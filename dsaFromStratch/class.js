class Vehicle {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  getName() {
    console.log(`The name of the vehicle is ${this.name}`)
  }

  setName(name) {
    this.name = name
  }
}

const v1 = new Vehicle("Tata",12000)
console.log(v1)
