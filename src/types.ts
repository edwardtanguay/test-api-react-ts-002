export type Category = {
	categoryID: string;
	description: string;
	name: string;
}

export type Product = {
	productID: number;
	categoryID: number;
	name: number;
}

export type DisplayProduct = {
	productName: string;
	productCategory: string;
}