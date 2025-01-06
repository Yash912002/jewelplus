interface CatelogCardProps {
	imageUrl: string;
	name: string;
	description: string;
}

const CatelogCard = ({ imageUrl, name, description }: CatelogCardProps) => {
	return (
		<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
			<div className="aspect-w-16 aspect-h-9 relative h-48 sm:h-64">
				<img src={imageUrl} alt={name} className="w-full h-full object-cover" />
			</div>
			<div className="p-5">
				<div className="flex justify-between items-start mb-2">
					<h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
						{name}
					</h3>
				</div>
				<p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
			</div>
		</div>
	);
};

export default CatelogCard;
