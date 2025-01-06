"use client";
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import QuantityControl from "./QuantityControl";

interface ProductCardProps {
	imageUrl: string;
	name: string;
	price: number;
	description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	imageUrl,
	name,
	price,
	description,
}) => {
	const [quantity, setQuantity] = useState(0);

	const handleClick = () => {
		setQuantity((prev) => prev + 1);
	};

	return (
		<div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-[450px] w-full cursor-pointer">
			<div className="relative h-48 sm:h-56 md:h-64">
				<img src={imageUrl} alt={name} className="w-full h-full object-cover" />
			</div>
			<div className="p-5">
				<div className="flex justify-between items-start mb-2">
					<h3 className="text-lg font-semibold text-gray-800 line-clamp-1 sm:text-xl">
						{name}
					</h3>
					<span className="text-md font-bold text-emerald-600 sm:text-lg">
						${price.toFixed(2)}
					</span>
				</div>
				<p className="text-gray-600 text-sm mb-4 line-clamp-2 sm:text-base">
					{description}
				</p>

				{quantity > 0 ? (
					<QuantityControl quantity={quantity} setQuantity={setQuantity} />
				) : (
					<button
						className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2
          hover:bg-emerald-700 transition-colors duration-300 sm:py-3"
						onClick={handleClick}
					>
						<ShoppingCart size={20} />
						Buy Now
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
