import { Division, Employee, Manager } from "../src/extending-interface"

describe('extending interface', () => {
	it('must support extending interface', () => {
		const employee: Employee = {
			id: "1",
			name: "A",
			division: Division.A,
		}

		console.log('employee:', employee)

		const manager: Manager = {
			id: '2',
			name: "B",
			division: Division.B,
			numOfEmployees: 1,
		}

		console.log('manager:', manager)
	})
})