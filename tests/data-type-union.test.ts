describe('union type', function () {
	it('must support union type', function () {
		let sample: number | string | boolean = "irda"
		console.log(sample)

		sample = true
		console.log(sample)

		sample = 22
		console.log(sample)
	})

	it('must support typeof operations', function () {
		const process = (value: number | string | boolean) => {
			if (typeof value === "string") {
				return value.toUpperCase()
			} else if (typeof value === "number") {
				return value -= 2
			} else if (typeof value === "boolean") {
				return !value
			}
		}

		expect(process("irda")).toBe("IRDA")
		expect(process(22)).toBe(20)
		expect(process(true)).toBe(false)
	})
})