# round-money [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/round-money/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/round-money)

Appropriately round amounts of money.

[![NPM Badge](https://nodei.co/npm/round-money.png)](https://npmjs.com/package/round-money)

## Install

```sh
npm install round-money
```

## Usage

```js
const roundMoney = require("round-money");

roundMoney(1.234);
//=> 12.34

roundMoney(12.345);
//=> 12.35
```

## API

### roundMoney(amount)

#### amount

Type: `number`

The amount to round.
