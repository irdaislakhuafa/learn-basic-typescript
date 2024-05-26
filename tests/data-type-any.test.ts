describe('any', function () {
	it("must support any like JS", function () {
		const anyPerson: any = {
			id: 1,
			name: "irda islakhu afa",
			age: 22
		}

		anyPerson.address = "indonesia" // success because any like in JS
		console.log(`anyPerson:`,anyPerson)
	})
})