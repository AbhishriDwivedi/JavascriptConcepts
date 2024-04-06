// Factory Function is a fucntion which produces objects when we called it
function createRectangle() {
  const rectangle = {
    length: 2,
    breadth: 4, // use :

    draw: function () {
      console.log("Drawing rectangle");
    },

    area: function () {
      console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
    },
  };
  return rectangle; // return statement
}

let rectangle1 = createRectangle(); //new keywork not needed
console.log(rectangle1.length);
