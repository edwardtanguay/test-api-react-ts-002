import { useEffect, useState, type ChangeEvent } from "react";
import type { Category, Product } from "../../types";
import axios from "axios";
import './styles.css';

const baseApiUrl = 'http://localhost:3399';
const token = 'abcde12345';

export const Test002 = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

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

	const handleSelectCategory = (event: ChangeEvent<HTMLSelectElement>) => {
		const categoryID = event.target.value;
		const _selectedProducts = products.filter(p => String(p.categoryID) === categoryID);
		setSelectedProducts(_selectedProducts);
	}

	return (
		<div className="area areaTest002">
			<h2>Test002: Choose Category to See Products</h2>

			<div className="productSelector">
				<select onChange={(e) => handleSelectCategory(e)}>
					<option value={0} key={0}>PLEASE CHOOSE</option>
					{categories.map((cat) => {
						return (
							<option value={cat.categoryID} key={cat.categoryID}>{cat.name}</option>
						)
					})}
				</select>
				<div className="selectedProducts">
					<ul>
						{selectedProducts.map((sp) => {
							return (
								<li key={sp.productID}>{sp.name}</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}