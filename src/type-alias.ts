type Category = {
	id: string;
	name: string;
}

export { Category };

export type Product = {
	id: string;
	name: string;
	price: number;
	category: Category;
}
