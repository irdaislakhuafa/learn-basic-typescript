describe('function as parameter', () => {
	it('must support function as parameter', () => {
		const sayHello = (name: string, filters?: ((name: string) => string)[]): string => {
			if (filters !== undefined) {
				for (const filter of filters) {
					name = filter(name)
				}
			}
			return `Hello ${name}`
		}

		expect(sayHello("irda")).toBe("Hello irda")

		function toUpper(name: string): string {
			return name.toUpperCase()
		}

		expect(sayHello("iRdA", [toUpper, (name: string): string => name.toLowerCase()])).toBe("Hello irda")
		expect(sayHello("iRdA", [(name: string): string => name.toLowerCase(), toUpper])).toBe("Hello IRDA")
	})
})