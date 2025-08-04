import React from 'react';
import { useAppDispatch } from '../component/hooks/useAppDispatch';
import { useAppSelector } from '../component/hooks/useAppSelector';
import {
  removeItem,
  updateQuantity,
  clearCart,
} from '../component/features/cart/cartSlice';

const CartSummary: React.FC = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-7">
      <h2 className="text-2xl font-bold mb-4">Your Cart ({items.length})</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t pt-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
