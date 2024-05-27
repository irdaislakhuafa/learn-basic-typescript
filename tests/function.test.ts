describe('function', () => {
	it('must support function', () => {
		const sayHello = (name: string | null = "World"): string => `Hello ${name}`
		expect(sayHello()).toBe("Hello World")
		expect(sayHello("irda")).toBe("Hello irda")

		const printHello = (name: string | null = "World"): void => console.log(`Hello ${name}`)
		printHello()
		printHello("irda")
	})
})