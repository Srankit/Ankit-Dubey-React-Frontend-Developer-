import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import { useAppDispatch } from '../component/hooks/useAppDispatch';
import { addItem } from '../component/features/cart/cartSlice';
import type { Product } from '../component/features/cart/types';


const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    // You can add a toast notification here if needed
  };

  const getCardClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow';
      case 'theme2':
        return 'bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors';
      case 'theme3':
        return 'bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1';
      default:
        return 'bg-white border border-gray-200 rounded-lg overflow-hidden';
    }
  };

  const getButtonClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'theme2':
        return 'bg-gray-600 hover:bg-gray-500 text-white';
      case 'theme3':
        return 'bg-pink-500 hover:bg-pink-600 text-white transform hover:scale-105';
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
  };

  const convertUsdToInr = (usd: number) => {
    const conversionRate = 83;
    return Math.round(usd * conversionRate);
  };

  return (
    <div className={`${getCardClasses()} h-full flex flex-col`}>
      <div className="p-4 flex-grow">
        <div className="flex justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className={`${
              theme === 'theme1'
                ? 'h-40 object-contain'
                : theme === 'theme2'
                ? 'h-40 object-contain filter brightness-90'
                : 'h-40 object-contain'
            }`}
          />
        </div>
        <h3 className={`${
          theme === 'theme1'
            ? 'text-lg font-semibold text-gray-800 mb-2'
            : theme === 'theme2'
            ? 'text-lg font-bold text-white mb-2'
            : 'text-lg font-bold text-purple-800 mb-2'
        }`}>
          {product.title}
        </h3>
        <p className={`${
          theme === 'theme1'
            ? 'text-gray-600 text-sm mb-4'
            : theme === 'theme2'
            ? 'text-gray-300 text-sm mb-4'
            : 'text-pink-600 text-sm mb-4'
        }`}>
          {product.description.substring(0, 100)}...
        </p>
        <div className={`${
          theme === 'theme1'
            ? 'text-blue-600 font-bold'
            : theme === 'theme2'
            ? 'text-white font-bold'
            : 'text-purple-600 font-bold'
        } mb-4`}>
          ₹{convertUsdToInr(product.price).toLocaleString('en-IN')}
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={handleAddToCart}
          className={`${getButtonClasses()} py-2 px-4 rounded-md w-full transition-all duration-300`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;