import ProductCard from "../components/ProductsCard";

const products = [
	{
		imageUrl: "gold-coins.jpg",
		name: "Gold Coins",
		price: 299.99,
		description: "Gold coins",
	},
	{
		imageUrl: "gold-coins.jpg",
		name: "Gold Coins",
		price: 299.99,
		description: "Gold coins",
	},
	{
		imageUrl: "gold-coins.jpg",
		name: "Gold Coins",
		price: 299.99,
		description: "Gold coins",
	},
	{
		imageUrl: "Silver.jpeg",
		name: "silver coin",
		price: 199.99,
		description: "Modern smartwatch with health tracking and notifications.",
	},
	{
		imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
		name: "Vintage Camera",
		price: 499.99,
		description: "Classic vintage camera perfect for photography enthusiasts.",
	},
	{
		imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
		name: "Vintage Camera",
		price: 499.99,
		description: "Classic vintage camera perfect for photography enthusiasts.",
	},
	{
		imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
		name: "Vintage Camera",
		price: 499.99,
		description: "Classic vintage camera perfect for photography enthusiasts.",
	},
];

const page = () => {
	return (
		<div className="bg-gray-100 p-4 md:p-6 mt-14">
			<div className="max-w-screen-lg mx-auto">
				{/* Heading */}
				<h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
					Featured Product
				</h1>

				{/* Products */}
				<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 sm:gap-6 justify-items-center max-h-full">
					{products.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
