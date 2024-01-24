const myArray = [1, 2, 3, 4, 5];
const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};
let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;

function myFunction(myParam) {
  console.log("This is a function.", myParam);
}

if (myNumber > 0) {
  console.log("The number is positive.");
} else if (myNumber < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

while (myNumber < 50) {
  console.log(myNumber);
  myNumber += 10;
}

switch (myString) {
  case "Hello":
    console.log("Greeting!");
    break;
  case "Goodbye":
    console.log("Farewell!");
    break;
  default:
    console.log("I don't understand.");
}

try {
  myFunction();
} catch (error) {
  console.log(error);
} finally {
  console.log("Done.");
}

// Regular expression example
const myRegex = /hello/gi;
const myText = "Hello, world! Hello, everyone!";
console.log(myText.match(myRegex));

// Method example
const myDate = new Date();
console.log(myDate.getFullYear());

// Comment example
// This is a comment.
