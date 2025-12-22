import { sum } from "../src/math.js";

const result = sum([1, 2, 3]);
if (result !== 6) {
  throw new Error(`Expected 6, got ${result}`);
}

console.log("Tests passed");
