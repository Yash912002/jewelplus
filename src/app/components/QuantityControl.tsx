import { Dispatch, SetStateAction } from "react";

type QuantityControlProps = {
  quantity : number;
  setQuantity: Dispatch<SetStateAction<number>>
}

const QuantityControl = ({quantity, setQuantity} : QuantityControlProps ) => {

	const increment = () => {
		setQuantity((prev) => prev + 1);
	};

	const decrement = () => {
    setQuantity((prev) => prev - 1);
	};

	return (
		<div className="p-3 flex justify-center gap-2 items-center">
			<button
				className="text-white bg-emerald-500  hover:bg-emerald-600  text-lg font-bold px-4 py-1 rounded-lg transition-colors"
				onClick={increment}
			>
				+
			</button>

			{quantity}

			<button
				className="text-white font-bold bg-red-500 hover:bg-red-600 text-lg px-4 py-1 rounded-lg transition-colors"
				onClick={decrement}
			>
				-
			</button>
		</div>
	);
};

export default QuantityControl;
