// slightly hilarious looking function but it works! determines whether two strings are anagrams.
var isAnagram = (test, original) => test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('') ? true : false


console.log(isAnagram('racecar', 'carrace')) // => true
console.log(isAnagram('Super', 'supe')) // => false
console.log(isAnagram('monster', 'Nomerst')) // => true