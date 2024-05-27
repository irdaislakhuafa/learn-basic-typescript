describe('function', () => {
	it('must support function', () => {
		const sayHello = (name: string = "World"): string => `Hello ${name}`
		expect(sayHello()).toBe("Hello World")
		expect(sayHello("irda")).toBe("Hello irda")

		const printHello = (name: string = "World"): void => console.log(`Hello ${name}`)
		printHello()
		printHello("irda")
	})

	it('must support rest parameter', () => {
		const sum = (...values: number[]): number => {
			let result: number = 0;
			for (const v of values) {
				result += v
			}
			return result
		}

		expect(sum(1, 1, 1, 1, 1)).toBe(5)
	})
})