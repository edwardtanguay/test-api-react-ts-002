import { useEffect, useState } from "react";
import type { Category } from "../types";

const baseApiUrl = 'http://localhost:3399';
const token = 'abcde12345';

export const Products = () => {
	const [categories, setCategories] = useState<Category[]>([]);

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
	})

	return (
		<div className="area areaProduct">
			<h2>Products</h2>
			<p>There are {categories.length} categories.</p>
		</div>
	)
}