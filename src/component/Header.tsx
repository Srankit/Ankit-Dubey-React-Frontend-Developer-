import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import logo from '../assets/logo.ico';
import { Link } from 'react-router-dom'; // Import Link
import './styles/themes.css';
import CartIcon from './CartIconCartIcon';


const Header: React.FC = () => {
  const { theme, themeIcon } = useTheme();

  const getHeaderClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-white text-gray-800 shadow-sm';
      case 'theme2':
        return 'bg-gray-900 text-white';
      case 'theme3':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      default:
        return 'bg-white text-gray-800';
    }
  };

  const getLogoClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'rounded-lg';
      case 'theme2':
        return 'rounded-full';
      case 'theme3':
        return 'rounded-2xl';
      default:
        return 'rounded-md';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {themeIcon}
          <Link to="/"> {/* Wrap the logo with Link */}
            <img 
              src={logo} 
              alt="ShopApp Logo" 
              className={`h-16 w-16 object-contain transition-all duration-300 ${getLogoClasses()}`}
            />
          </Link>
          <h1 className="text-xl font-bold hidden sm:block">Hipster</h1>
        </div>
        <div className="flex items-center space-x-4">
  <CartIcon/>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;