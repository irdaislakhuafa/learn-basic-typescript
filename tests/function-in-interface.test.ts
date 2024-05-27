import { Person } from "../src/function-in-interface"

describe('function in interface', () => {
	it('must support function in interface', () => {
		const person: Person = {
			name: "irda",
			sayHello: function (name: string) {
				return `Hello ${name}, my name is ${this.name}`
			}
		}

		expect(person.sayHello("haha")).toBe("Hello haha, my name is irda")
	})
})