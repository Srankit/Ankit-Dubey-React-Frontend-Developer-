import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const getContainerClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-gray-50 min-h-screen pt-24 pb-12';
      case 'theme2':
        return 'bg-gray-900 min-h-screen pt-24 pb-12';
      case 'theme3':
        return 'bg-gradient-to-b from-purple-50 to-pink-50 min-h-screen pt-24 pb-12';
      default:
        return 'bg-gray-50 min-h-screen pt-24 pb-12';
    }
  };

  const getTitleClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'text-3xl font-light text-gray-800 mb-8';
      case 'theme2':
        return 'text-3xl font-bold text-white mb-8';
      case 'theme3':
        return 'text-4xl font-bold text-purple-600 mb-8 text-center';
      default:
        return 'text-3xl font-light text-gray-800 mb-8';
    }
  };

  const getTextClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'text-gray-600 mb-6';
      case 'theme2':
        return 'text-gray-300 mb-6';
      case 'theme3':
        return 'text-pink-700 mb-6';
      default:
        return 'text-gray-600 mb-6';
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

  return (
    <div className={getContainerClasses()}>
      <div className="container mx-auto px-4">
        <h1 className={getTitleClasses()}>About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className={getTextClasses()}>
            Welcome to ShopApp, your premier destination for all your shopping needs. Founded in
            2023, we've been dedicated to providing high-quality products with exceptional customer
            service.
          </p>
          <p className={getTextClasses()}>
            Our mission is to make online shopping easy, enjoyable, and accessible to everyone. We
            carefully curate our product selection to ensure we offer only the best items to our
            customers.
          </p>
          <p className={getTextClasses()}>
            With a team of passionate professionals, we strive to innovate and improve our services
            continuously. Your satisfaction is our top priority.
          </p>
          <div className="mt-8">
            <button
              className={`${getButtonClasses()} py-2 px-6 rounded-md transition-all duration-300`}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;