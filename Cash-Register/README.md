_Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key._

```
function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeNeeded = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);

  if (totalCid < changeNeeded) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (totalCid === changeNeeded) {
    return {status: "CLOSED", change: cid};
  } else {
    cid = cid.reverse();
    let change = [];

    for (let i = 0; i < cid.length; i++) {
      let currencyName = cid[i][0];
      let currencyAmount = cid[i][1];
      let currencyValue = currencyUnit[currencyName];
      let currencyAvailable = currencyAmount / currencyValue;
      let currencyToReturn = 0;

      while (changeNeeded >= currencyValue && currencyAvailable > 0) {
        changeNeeded -= currencyValue;
        changeNeeded = Math.round(changeNeeded * 100) / 100;
        currencyAvailable--;
        currencyToReturn++;
      }

      if (currencyToReturn > 0) {
        change.push([currencyName, currencyToReturn * currencyValue]);
      }
    }

    if (changeNeeded > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: change};
    }
  }
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
```
