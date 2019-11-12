import { Car, Engine, Tires } from "./car";

// Examples with car and engine variations
export function simpleCar() {
  let car = new Car(new Engine(), new Tires());
  car.description = "Simple";
  return car;
}

class Engine2 {
  constructor(public cylinders: number) {}
}
export function superCar() {
  // Super car with 12 cylinders and Flintstone tires.
  let bigCylinders = 12;
  let car = new Car(new Engine2(bigCylinders), new Tires());
  car.description = "Super";
  return car;
}

class MockEngine extends Engine {
  cylinders = 8;
}
class MockTires extends Tires {
  make = "YokoGoodStone";
}

export function testCar() {
  // Test car with 8 cylinders and YokoGoodStone tires.
  let car = new Car(new MockEngine(), new MockTires());
  car.description = "Test";
  return car;
}
