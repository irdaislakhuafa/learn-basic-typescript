describe('ternary operator', () => {
	it('learn ternary operator', () => {
		const value: number = 80
		const say: string = value >= 80 ? "Congratulation" : "Try Again";
		expect(say).toBe("Congratulation")
	})
})