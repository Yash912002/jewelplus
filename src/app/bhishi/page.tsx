"use client";
import React, { useState } from "react";

const BhishiPage = () => {
  const historyData = [
    { month: "05/January", price: "₹1000" },
    { month: "05/December", price: "₹2000" },
    { month: "05/November", price: "₹3000" },
    { month: "05/October", price: "₹4000" },
    { month: "05/September", price: "₹5000" },
    { month: "05/August", price: "₹6000" },
    { month: "05/July", price: "₹7000" },
    { month: "05/June", price: "₹9000" },
    { month: "05/May", price: "₹10000" },
    { month: "05/April", price: "₹11000" },
  ];
  const history23_24 = [
    { month: "05/March", price: "₹1000" },
    { month: "05/February", price: "₹1000" },
    { month: "05/January", price: "₹1000" },
    { month: "05/December", price: "₹2000" },
    { month: "05/November", price: "₹3000" },
    { month: "05/October", price: "1000" },
    { month: "05/September", price: "2000" },
    { month: "05/August", price: "₹6000" },
    { month: "05/July", price: "1000" },
    { month: "05/June", price: "₹9000" },
    { month: "05/May", price: "9000" },
    { month: "05/April", price: "₹1000" },
  ];

  const inactiveCards = [
    { year: "2023-2024", totalAmount: "₹37000" },
    { year: "2022-2023", totalAmount: "₹25000" },
  ];

  const [selectedCard, setSelectedCard] = useState<null | {
    year: string;
    totalAmount: string;
  }>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (cardIndex: number) => {
    setSelectedCard(inactiveCards[cardIndex]);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      {/* Main Container */}
      <div className="w-full max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Bhishi
        </h1>

        {/* Active Year Card */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold text-blue-700">
            Active Year: 2024-2025
          </h2>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200">
              History
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
              {historyData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md text-center"
                >
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {item.month}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {inactiveCards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(index)}
            >
              <h2 className="text-lg font-semibold text-gray-400 dark:text-gray-200">
                Inactive
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Year: {card.year}
              </p>
              <h3 className="text-sm text-gray-600 dark:text-gray-400">
                Total Amount: {card.totalAmount}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md sm:max-w-lg w-full">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700">
              Year: {selectedCard.year}
            </h2>
            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                History
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {history23_24.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-md text-center"
                  >
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.month}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BhishiPage;
