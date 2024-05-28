describe('loop', () => {
	it('for loop', () => {
		const names: string[] = ["a", "b", "c"]

		// for with manual index
		for (let index = 0; index < names.length; index++) {
			console.log(names[index])
		}
		console.log('')

		// for with element
		for (const name of names) {
			console.log(name)
		}
		console.log('')

		// for with index
		for (const index in names) {
			console.log(names[index])
		}
		console.log('')

		// for each
		names.forEach((name) => {
			console.log(name)
		})
		console.log('')
	})
})