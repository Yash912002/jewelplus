import CatelogCard from "../components/CatelogCard";

const page = () => {
	const catelogs = [
		{
			imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
			name: "Premium Headphones",
			description:
				"High-quality wireless headphones with noise cancellation and premium sound quality.",
		},
		{
			imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
			name: "Smart Watch",
			description: "Modern smartwatch with health tracking and notifications.",
		},
		{
			imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
			name: "Vintage Camera",
			description:
				"Classic vintage camera perfect for photography enthusiasts.",
		},
		{
			imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
			name: "Premium Headphones",
			description:
				"High-quality wireless headphones with noise cancellation and premium sound quality.",
		},
		{
			imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
			name: "Smart Watch",
			description: "Modern smartwatch with health tracking and notifications.",
		},
		{
			imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
			name: "Vintage Camera",
			description:
				"Classic vintage camera perfect for photography enthusiasts.",
		},
	];

	return (
		<div className="min-h-screen bg-gray-100 p-6 mt-14">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
					Featured Catelogs
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{catelogs.map((catelog, index) => (
						<CatelogCard key={index} {...catelog} />
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
