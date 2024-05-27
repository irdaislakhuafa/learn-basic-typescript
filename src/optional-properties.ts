type ID = string | number;

type Category = {
	id: ID;
	name: string;
	description?: string
};

type Product = {
	id: ID;
	name: string;
	price: number;
	description?: string
};

export { Category, ID, Product };

