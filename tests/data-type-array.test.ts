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

	// tupple: readonly array with explicit data type for each element and fixed length of element
	it("must support tupple", function () {
		const roPersons: readonly [string, string, number] = ["irda", "islakhu afa", 22]
		console.log(`ro persons: ${roPersons}`)
		// roPersons[0] = "a" // error because read only
		
		// try tupple without readonly
		const rwPersons: [string, string, number] = ["irda", "islakhu afa", 22]
		console.log(`rw persons: ${rwPersons}`)
		// rwPersons[0] = "a"// success because not read only
})
})