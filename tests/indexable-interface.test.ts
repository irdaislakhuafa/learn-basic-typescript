import { StringArray, StringMap } from "../src/indexable-interface"

describe('indexable interface', () => {
	it('must support indexable interface array', () => {
		const names: StringArray = ["irda", "islakhu", "afa"]
		console.log('names:', names)
	})

	it('must support indexable interface map', () => {
		const person: StringMap = {
			id: "1",
			name: "irda islakhu afa",
			age: "22"
		}
		console.log('person:', person)


		expect(person["id"]).toBe("1")
		expect(person.name).toBe("irda islakhu afa")
		expect(person["age"]).toBe("22")
	})
})