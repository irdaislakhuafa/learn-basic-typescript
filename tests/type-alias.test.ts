import { Category, Product } from "../src/type-alias"

describe('type alias', () => {
	it("must support type alias in TS", () => {
		const category: Category = {
			id: "1",
			name: "Laptop"
		}

		const product: Product = {
			id: "1",
			name: "ThinkPad X1 Nano",
			price: 15_000_000.00,
			category: category,
		}

		console.log('category:', category)
		console.log('product:', product)
	})
})