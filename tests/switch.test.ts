describe('switch', () => {
	it('learn switch statement', () => {
		const sayHello = (name: string): string => {
			switch (name) {
				case "a":
					return `Hello ${name}`
				case "b":
					return `Hi ${name}`
				default:
					return name
			}
		}

		expect(sayHello("a")).toBe('Hello a')
		expect(sayHello("b")).toBe('Hi b')
		expect(sayHello("c")).toBe('c')
	})
})