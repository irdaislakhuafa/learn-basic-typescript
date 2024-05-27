import { Person } from "../src/function-in-interface"

describe('type assertions', () => {
	it('must support type assertion', () => {
		const person: any = {
			name: "irda",
			age: 22
		}

		const person2: Person = person as Person
		console.log('person2:', person2)
	})
})