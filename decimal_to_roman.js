function convertToRoman(num) {

let rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
let dec = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
let s = "";

for (let i = 0; i < 13; i++) {

  while (num / dec[i] >= 1)  {
  s += rom[i];
  num -= dec[i];
  }
}

 return s;
}
