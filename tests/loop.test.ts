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

	it('while loop', () => {
		let counter: number = 0
		while (counter < 10) {
			counter++
		}

		expect(counter).toBe(10)
	})

	it('do while loop', () => {
		let counter: number = 0;
		do {
			counter++;
		} while (counter < 10)

		expect(counter).toBe(10)
	})

	it('break and continue', () => {
		let counter: number = 0;

		do {
			counter++
			if (counter >= 10) {
				break
			}

			if (counter % 2 == 0) {
				continue
			}

			console.log(counter)
		} while (true)
	})
})