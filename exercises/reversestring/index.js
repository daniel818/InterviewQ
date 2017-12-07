// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str
//     .split("") //split into an array (when empty => each character in splitting
//     .reverse()
//     .join("");
// }
// module.exports = reverse;

// function reverse(str) {
//   let reversed = "";
//
//   for (let ch of str) {
//     reversed = ch + reversed;
//   }
//   return reversed;
// }
// module.exports = reverse;

// function reverse(str) {
//     let reversed = "";
//
//     for (let ch of str) {
//         reversed = ch + reversed;
//     }
//     return reversed;
// }
// module.exports = reverse;

function reverse(str) {
   //splitting to an array and using reduce to reversed
   return str.split("").reduce((rev, char) => char + rev, "");
}
module.exports = reverse;
