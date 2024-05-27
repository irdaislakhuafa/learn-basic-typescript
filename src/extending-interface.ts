export enum Division {
	A = "A",
	B = "B"
}

export interface Employee {
	id: string,
	name: string,
	division: Division,
}

export interface Manager extends Employee {
	numOfEmployees: number,
}