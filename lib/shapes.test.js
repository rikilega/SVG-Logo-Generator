const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("renders a triangle with a given color", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 3 280, 197 20, 197" fill="blue" />');
  });
});

describe("Circle", () => {
  test("renders a circle with a given color", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="97" fill="red" />');
  });
});

describe("Square", () => {
  test("renders a square with a given color", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="green" />');
  });
});
