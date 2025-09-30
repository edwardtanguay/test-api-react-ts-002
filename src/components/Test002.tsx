import { useState } from "react";
import type { Product } from "../types";

export const Test002 = () => {
	const [products, setProducts] = useState<Product[]>([]);

	return (
		<div className="area areaTest002">
			<h2>Test002: Choose Category to See Products</h2>
			<p>There are {products.length} products.</p>
		</div>
	)
}