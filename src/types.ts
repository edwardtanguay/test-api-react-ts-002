export type Category = {
	categoryID: number;
	description: string;
	name: string;
}

export type Product = {
	productID: number;
	categoryID: number;
	name: string;
}

export type DisplayProduct = {
	productName: string;
	productCategory: string;
}