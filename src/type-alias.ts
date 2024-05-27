// type alias with union
type ID = string | number

type Category = {
	id: ID;
	name: string;
}

export { Category, ID };

export type Product = {
	id: ID;
	name: string;
	price: number;
	category: Category;
}
