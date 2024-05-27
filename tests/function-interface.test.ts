import { AddFunction } from "../src/function-interface"

describe('function interface', () => {
	it('must support function interface', () => {
		const add: AddFunction = (v1: number, v2: number): number => {
			return v1 + v2
		}

		expect(add(1, 1)).toBe(2)
	})
})