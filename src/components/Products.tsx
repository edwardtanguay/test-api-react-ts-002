import { useEffect, useState } from "react";
import { type Product, type Category } from "../types";
import axios from "axios";

const baseApiUrl = 'http://localhost:3399';
const token = 'abcde12345';

export const Products = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${baseApiUrl}/northwind/categories`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const _categories = await response.json();
			setCategories(_categories);
		})();
	});

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${baseApiUrl}/northwind/products`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const _products = response.data;
			setProducts(_products);
		})();
	})

	return (
		<div className="area areaProduct">
			<h2>Products</h2>
			<p>There are {categories.length} categories.</p>
			<p>There are {products.length} products.</p>
		</div>
	)
}