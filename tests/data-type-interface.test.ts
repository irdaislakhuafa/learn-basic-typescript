import { Seller } from "../src/data-type-interface"

describe('interface', () => {
	it('must support interface', () => {
		const seller: Seller = {
			id: 1,
			name: "blabla",
		}

		// use readonly id
		// seller.id = 2 // error
		console.log("seller:", seller)
	})
})