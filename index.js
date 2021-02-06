module.exports = function print(str) {
  if (typeof str !== "string") {
    throw new Error("Input is not of type 'string'");
  }
  console.log(str);
};

// class TomsPrint {
//   public static print(): void {
//     console.log("TomsPrint::print");
//   }
// }
//
// module.exports = {
//   TomsPrint: TomsPrint
// };
