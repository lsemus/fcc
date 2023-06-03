Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {

let s  = str.toLowerCase().split('');
let f = [];
const regex = new RegExp('[0-9a-zA-Z]');

for(let i in s) {
  if (regex.test(s[i])) f.push(s[i]);
}

let s1 = f.join('');
let rev = f.reverse().join('');

return s1 === rev;
}

palindrome("eye");
