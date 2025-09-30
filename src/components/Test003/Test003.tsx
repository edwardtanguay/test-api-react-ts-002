import { useEffect, useState } from "react";
import type { Category, Product } from "../../types";

const baseApiUrl = 'http://localhost:3399';
const token = 'abcde12345';


export const Test003 = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${baseApiUrl}/northwind/products`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const _products = await response.json();
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
		<div className="area areaTest003">
			<h2>Test003: Search box</h2>
			<p>There are {products.length} products.</p>
			<p>There are {categories.length} categories.</p>
		</div>
	)
}