import { StringArray } from "../src/indexable-interface"

describe('indexable interface', () => {
	it('must support indexable interface array', () => {
		const names: StringArray = ["irda", "islakhu", "afa"]
		console.log('names:', names)
	})
})