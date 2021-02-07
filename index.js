// import { Print } from "@eure21/reuse";
const Print = require("@eure21/reuse");

module.exports = function print(str) {
  if (typeof str !== "string") {
    throw new Error("Input is not of type 'string'");
  }
  Print.log(str);
};
