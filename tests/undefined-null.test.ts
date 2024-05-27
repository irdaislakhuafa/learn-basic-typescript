describe('undefined and null', () => {
	it('must support undefined and null', () => {
		const sayHello = (name?: string | null): string => `Hello${name ? ' ' + name : ''}`

		// if value is exists
		expect(sayHello("irda")).toBe("Hello irda")

		// if value is undefined
		const name: string | undefined = undefined
		expect(sayHello(name)).toBe("Hello")

		// if value is null
		expect(sayHello(null)).toBe("Hello")
	})
})