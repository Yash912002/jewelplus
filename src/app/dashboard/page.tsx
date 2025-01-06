import React from "react";

const Dashboard = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b p-4">
			<h1 className="font-bold text-5xl mb-8 text-blue-600">Dashboard</h1>
			{/* Gold Section */}
			<div className="flex flex-col sm:flex-row justify-around items-center gap-4 px-8 py-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-lg">
				<img
					src="gold coin.jpeg"
					alt="Gold coin"
					className="w-20 h-20 rounded-full object-cover"
				/>
				<div className="text-center sm:text-left">
					<p className="text-md font-semibold text-gray-800">
						24k price - <span className="font-bold">80,000 Rs</span>
					</p>
					<p className="text-md font-semibold text-gray-800">
						22k price - <span className="font-bold">60,000 Rs</span>
					</p>
					<p className="text-md font-semibold text-gray-800">
						18k price - <span className="font-bold">40,000 Rs</span>
					</p>
				</div>
			</div>

			{/* Silver Section */}
			<div className="flex flex-col sm:flex-row justify-around items-center gap-4 px-8 py-6 bg-blue-100 rounded-lg shadow-lg w-full max-w-lg mt-6">
				<img
					src="silver coin.jpeg"
					alt="Silver coin"
					className="w-20 h-20 rounded-full border-4 border-white object-cover"
				/>
				<div className="text-center sm:text-left">
					<p className="text-md font-semibold text-gray-800">
						1kg price - <span className="font-bold">40,000 Rs</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
