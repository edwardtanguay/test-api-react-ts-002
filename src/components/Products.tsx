import { useEffect, useState } from "react";
import { type Product, type Category, type DisplayProduct } from "../types";
import axios from "axios";

const baseApiUrl = 'http://localhost:3399';
const token = 'abcde12345';

export const Products = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [displayProducts, setDisplayProducts] = useState<DisplayProduct[]>([]);

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
	}, []);

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
		if (categories.length > 0 && products.length > 0) {
			const _displayProducts: DisplayProduct[] = products.map(p => {
				const _category = categories.find(c => c.categoryID === p.categoryID);
				return {
					productName: p.name,
					productCategory: _category ? _category.name : "(not found)"
				}
			})
			setDisplayProducts(_displayProducts);
		}
	}, [categories, products])

	return (
		<div className="area areaProduct">
			<h2>Test001: List Products with Category Information</h2>
			<ul className="displayProductsList">
				{displayProducts.map((dprod, index) => {
					return (
						<li key={index}>{dprod.productName} <span className="productCategory">({dprod.productCategory})</span></li>
					)
				})}
			</ul>
		</div>
	)
}