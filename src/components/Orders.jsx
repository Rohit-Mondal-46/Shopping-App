import React from 'react';
import { useOrder } from '../contexts/Orders/OrderContextProvider';

function Order() {
  const { orderState, orderDispatch } = useOrder();

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <h1 className="text-3xl font-bold text-white mb-4">My Orders</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
        {orderState.orders.length === 0 ? (
          <div className="text-center text-gray-700">You have no orders</div>
        ) : (
          orderState.orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex-grow ml-4">
                <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                <p className="text-gray-600">Total: ₹{order.total}</p>
                <p className="text-gray-600">Status: {order.status}</p>
              </div>
              <button
                className="bg-red-500 text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
                onClick={() => orderDispatch({ type: 'REMOVE_ORDER', payload: order.id })}
              >
                Cancel Order
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Order;