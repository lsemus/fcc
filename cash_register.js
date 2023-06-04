Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


function checkCashRegister(price, cash, cid) {

  let result = {"status": "OPEN","change": [] };

  let unit = ["PENNY","NICKEL","DIME","QUARTER","ONE","FIVE","TEN","TWENTY","ONE HUNDRED"];
  let unit_val = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  let coins = Array(9).fill(0);
  let taken = Array(9).fill(0);
  let diff = cash - price;

  for (let i = 0; i < cid.length; i++){
    coins[i] = cid[i][1];
  };

let sum = coins.reduce((sum,x) => sum + x, 0);

  if (sum < diff) {
    return {status: "INSUFFICIENT_FUNDS", change: []};  
  }
  
  if (sum >= diff) {
    
    for (let i = coins.length-1; i >= 0; i--) {
      
      if (coins[i] == 0) continue;
      
      if (i == 0 && diff > coins[i]) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }

      if (i == 0 && diff == coins[i]) {
        result.status = "CLOSED";
        result.change = cid;
        return result;
      }

      if (diff < coins[i] && diff / unit_val[i] < 1) {
        console.log("1st if");
        continue;
      };

      if (diff >= coins[i]){
        console.log("2nd if");
        taken[i] = coins[i];
        result.change.push([unit[i],taken[i]]);
        diff = (diff - taken[i]).toFixed(2);
        continue;
      } 
      if (diff < coins[i] && diff / unit_val[i] > 1) {
        let count = 0;
        while (diff >= unit_val[i]) {
          count++;
          diff = (diff - unit_val[i]).toFixed(2);
        };
        taken[i] = count * unit_val[i];
        result.change.push([unit[i],taken[i]]);
        if (diff == 0) return result;
        continue;
      } else {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      };
  }; 

return result;
};
}    
   

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);




Tests
Passed:checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
Passed:checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
Passed:checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
Passed:checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
Passed:checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
Passed:checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
