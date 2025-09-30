import { useEffect, useState } from "react";
import type { Category, Product } from "../types";
import axios from "axios";

const baseApiUrl = 'http://localhost:3399';
const token = 'abcde12345';

export const Test002 = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

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
	}, [])

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
	}, [])

	return (
		<div className="area areaTest002">
			<h2>Test002: Choose Category to See Products</h2>
			<p>There are {products.length} products.</p>
			<p>There are {categories.length} categories.</p>
		</div>
	)
}