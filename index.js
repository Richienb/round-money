"use strict"

const roundTo = require("round-to")

module.exports = amount => {
	if (typeof amount !== "number" && !Number.isNaN(amount)) {
		throw new TypeError(`Expected a number, got ${amount}`)
	}

	return roundTo(amount, 2)
}
