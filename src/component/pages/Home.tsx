import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { useTheme } from '../contexts/ThemeContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  if (loading) {
    return (
      <div className={getContainerClasses()}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={getContainerClasses()}>
        <div className="container mx-auto px-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={getContainerClasses()}>
      <div className="container mx-auto px-4">
        <h1 className={getTitleClasses()}>Our Products</h1>
        <div
          className={`grid grid-cols-1 ${
            theme === 'theme3' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'
          } gap-6`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;