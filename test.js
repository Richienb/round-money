const test = require("ava")
const roundMoney = require(".")

test("main", t => {
	t.is(roundMoney(1.234), 1.23)
	t.is(roundMoney(12.345), 12.35)
})
