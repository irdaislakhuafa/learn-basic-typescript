import { Category, Product } from "../src/optional-properties"

describe('optional properties', () => {
	it('must support optional properties', () => {
		const category: Category = {
			id: 1,
			name: "Laptop",
			description: "blablabla" // but optional
		}
		const product: Product = {
			id: "1",
			name: "ThinkPad X1 Nano",
			price: 15_000_000.00,
			// we disable optional properties "description" here
		}

		console.log("category:", category)
		console.log("product:", product)
	})
})