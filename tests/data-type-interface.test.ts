import { Seller } from "../src/data-type-interface"

describe('interface', () => {
	it('must support interface', () => {
		const seller: Seller = {
			id: 1,
			name: "blabla",
		}

		console.log("seller:", seller)
	})
})