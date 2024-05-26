import { sayHello } from "../src/say-hello"

describe('sayHello', function () {
	it('must return "Hello Developer"', function () {
		const result = sayHello("Developer")
		expect(result).toBe("Hello Developer")
	})
})