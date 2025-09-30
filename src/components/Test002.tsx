import { useEffect, useState } from "react";
import type { Product } from "../types";

const baseApiUrl = 'http://localhost:3399';
const token = 'abcde12345';

export const Test002 = () => {
	const [products, setProducts] = useState<Product[]>([]);

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

	return (
		<div className="area areaTest002">
			<h2>Test002: Choose Category to See Products</h2>
			<p>There are {products.length} products.</p>
		</div>
	)
}