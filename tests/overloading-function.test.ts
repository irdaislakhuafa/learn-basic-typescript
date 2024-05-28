describe('overloading function', () => {
	it('must support overloading function', () => {
		function callMe(me: string): string;
		function callMe(me: number): number;
		function callMe(me: any) {
			if (typeof me === "string") {
				return me
			} else if (typeof me === "number") {
				return me
			}
		}

		expect(callMe("irda")).toBe("irda")
		expect(callMe(22)).toBe(22)
	})
})