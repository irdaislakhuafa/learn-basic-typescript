describe('type object', () => {
	it('must support type object in TS', () => {
		const person: { id: string, name: string } = {
			id: "1",
			name: "irda"
		}

		console.log("person:", person)
	})
})