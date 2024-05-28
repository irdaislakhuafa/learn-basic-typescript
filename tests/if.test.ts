describe('if statement', () => {
	it('learn if statement', () => {
		const value: number = 80

		const showGrade = (value: number): string => {
			if (value >= 80) {
				return "Good"
			} else if (value >= 60) {
				return "Not Bad"
			} else {
				return "Try Again"
			}
		}

		expect(showGrade(value)).toBe("Good")
	})
})