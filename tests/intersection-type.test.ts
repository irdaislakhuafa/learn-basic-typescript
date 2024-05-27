import { Domain } from "../src/intersection-type"

describe('intersection type', () => {
	it('must support intersection type', () => {
		const domain: Domain = {
			id: 1,
			name: "irda"
		}

		console.log('domain:', domain)
	})
})