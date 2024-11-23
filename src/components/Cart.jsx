import { useState, useEffect } from 'react';
import { useCart } from '../contexts/Cart/CartContextProvider';
import { useOrder } from '../contexts/Orders/OrderContextProvider';
import Ratings from './Ratings';
import { AiFillDelete } from "react-icons/ai";
import CheckoutModal from './CheckoutModal';

function Cart() {
  const { productsState, productsDispatch } = useCart();
  const { orderDispatch } = useOrder();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTotalPrice(productsState.cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [productsState.cart]);

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    const newOrder = {
      id: Date.now(),
      items: productsState.cart,
      total: totalPrice,
      status: 'Placed'
    };
    orderDispatch({ type: 'ADD_ORDER', payload: newOrder });
    productsDispatch({ type: 'CLEAR_CART' });
    setIsModalOpen(false);
    alert('Congratulations, your order has been placed!');
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <h1 className="text-3xl font-bold text-white mb-4">Shopping Cart</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
        {productsState.cart.length === 0 ? (
          <div className="text-center text-gray-700">Your cart is empty</div>
        ) : (
          productsState.cart.map((prod) => (
            <div key={prod.id} className="flex items-center justify-between p-4 border-b border-gray-200">
              <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-grow ml-4">
                <h2 className="text-lg font-semibold">{prod.name}</h2>
                <p className="text-gray-600">Price: ₹{prod.price}</p>
                <Ratings ratings={prod.ratings} />
              </div>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300"
                onClick={() => productsDispatch({ type: 'REMOVE_FROM_CART', payload: prod.id })}
              >
                <AiFillDelete size={24} />
              </button>
            </div>
          ))
        )}
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-xl font-bold">Total Price: ₹{totalPrice}</h2>
          <button
            className={`bg-indigo-600 text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 ${productsState.cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleCheckout}
            disabled={productsState.cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        cartItems={productsState.cart}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default Cart;