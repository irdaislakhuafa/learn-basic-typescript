describe('array', function () {
	it("must equals with js", function () {
		const names: string[] = ["a", "b", "c"]
		const values = [1, 2, 3]

		console.log(names)
		console.log(values)

	})
	
	it("must readonly array", function () {		
		let roArray: ReadonlyArray<number> = [1, 2, 3]
		console.log(`readonly array: ${roArray}`)

		// roArray[0] = 0 // error because read only
		// roArray = [1, 2] // success
	})
})