import { longString } from "./input.mjs";

const inputFromFile = longString();

let solution = inputFromFile
  .replace(/[a-zA-Z]*/g, "")
  .match(/\d+/g)
  .map((num) => {
    if (num.length > 2) {
      return parseInt(num[0] + num.slice(-1), 10);
    } else if (num.length === 1) {
      return parseInt(num + num, 10);
    } else {
      return parseInt(num);
    }
  });
  
let sum = 0;
solution.forEach((element) => {
  sum += element;
});

console.log("Egon:", sum);
