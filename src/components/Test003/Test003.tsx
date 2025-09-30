import { useEffect, useState } from "react";
import type { DisplayProduct, Category, Product } from "../../types";
import "./styles.css";

const baseApiUrl = 'http://localhost:3399';
const token = 'abcde12345';


export const Test003 = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [displayProducts, setDisplayProducts] = useState<DisplayProduct[]>([]);

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

	useEffect(() => {
		if (categories.length > 0 && products.length > 0) {
			const _displayProducts: DisplayProduct[] = products.map(p => {
				const category = categories.find(c => c.categoryID === p.categoryID)
				return {
					productName: p.name,
					productCategory: category ? category.name : "(UNKNOWN)"
				}
			})
			setDisplayProducts(_displayProducts);
		}

	}, [categories, products])

	return (
		<div className="area areaTest003">
			<h2>Test003: Search box</h2>
			<div className="searchArea">
				<input />
			</div>
			<ul>
				{displayProducts.map((dp, idx) => {
					return (
						<li key={idx}>{dp.productName} ({dp.productCategory})</li>
					)
				})}
			</ul>
		</div>
	)
}