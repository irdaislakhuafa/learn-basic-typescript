import { Customer, CustomerType } from "../src/data-type-enum"

describe('enum', () => {
	it('must support enum', () => {
		const customer: Customer = {
			id: 1,
			name: "ana ardani",
			type: CustomerType.PLATINUM,
		}

		console.log('customer:', customer)
	})
})