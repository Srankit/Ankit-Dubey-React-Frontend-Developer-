// src/components/CartIcon.tsx
import React from 'react';
import { useAppSelector } from './hooks/useAppSelector';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useTheme } from './contexts/ThemeContext';

// In CartIcon.tsx
const CartIcon: React.FC = () => {

  const { theme } = useTheme(); // Add this line
  const items = useAppSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  // Get icon color based on theme
  const iconColor = theme === 'theme2' ? 'text-white' : 'text-gray-700';
  const hoverColor = theme === 'theme2' ? 'group-hover:text-gray-300' : 'group-hover:text-gray-900';

  return (
    <Link to="/cart" className="relative group">
      <ShoppingBagIcon className={`w-6 h-6 ${iconColor} ${hoverColor} transition-colors`} />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartIcon