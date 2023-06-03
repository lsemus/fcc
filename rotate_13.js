One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let out = "";
  let c = 0;
  const regex = new RegExp('[a-zA-z]');

  for (let i = 0; i < str.length; i++) {
    
    if (regex.test(str[i])) {
    c = s.indexOf(str[i]);
    
    if (c + 13 >= 26) {
      out += s[13 - 26 + c];
    } else {
      c = s.indexOf(str[i]) + 13;
      out += s[c];
    }
    } else {
      out += str[i];
    }
  }

  return out;
}

rot13("SERR PBQR PNZC");
