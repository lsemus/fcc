//Flatten a nested array. You must account for varying levels of nesting.
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
  
  console.log(arr);
  let out = [];
  recurs(0,arr,out);
  return out;
}

function recurs(i, inp, out) {
  if(i >= inp.length) return;

  if(isArray(inp[i])) {
    recurs(0, inp[i], out);
  } else {
    out.push(inp[i]);
  }

  recurs(i + 1, inp, out);
}
 
function isArray(x) {
 if (Array.isArray(x)) { 
   return true; 
   } else {
   return false;
   }
}

steamrollArray([1, [2], [3, [[4]]]]);
