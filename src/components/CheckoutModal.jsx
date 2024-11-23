import React from 'react';

function CheckoutModal({ isOpen, onClose, onConfirm, cartItems, totalPrice }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Confirm Your Order</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <ul className="list-disc list-inside">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ₹{totalPrice}</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white rounded-lg px-4 py-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-600 text-white rounded-lg px-4 py-2"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;