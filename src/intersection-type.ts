export interface HasID {
	id: number
}

export interface HasName {
	name: string
}

export type Domain = HasID & HasName