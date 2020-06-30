/**
Appropriately round amounts of money.
@param amount The amount to round.
@example
```
const roundMoney = require("round-money");

roundMoney(1.234);
//=> 12.34

roundMoney(12.345);
//=> 12.35
```
*/
declare function roundMoney(amount: number): number

export = roundMoney
