// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const aChar = buildCharMap(stringA);
//   const bChar = buildCharMap(stringB);
//
//   if (Object.keys(aChar).length !== Object.keys(bChar).length) {
//     return false;
//   }
//   for (let char in aChar) {
//     if (aChar[char] !== bChar[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, "").toLocaleLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

//second solution
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB)
}

function cleanStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLocaleLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
