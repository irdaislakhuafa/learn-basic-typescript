describe('function', () => {
	it('must support function', () => {
		const sayHello = (name: string = "World"): string => `Hello ${name}`
		expect(sayHello()).toBe("Hello World")
		expect(sayHello("irda")).toBe("Hello irda")

		const printHello = (name: string = "World"): void => console.log(`Hello ${name}`)
		printHello()
		printHello("irda")
	})
})