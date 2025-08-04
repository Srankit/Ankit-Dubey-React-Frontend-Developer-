import React from 'react';
import { useTheme } from './contexts/ThemeContext';

// Import icons (you can use react-icons or SVG)
const ThemeIcon = ({ theme }: { theme: string }) => {
  switch (theme) {
    case 'theme1':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      );
    case 'theme2':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      );
    case 'theme3':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
};

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  const themes = [
    { id: 'theme1', name: 'Light' },
    { id: 'theme2', name: 'Dark' },
    { id: 'theme3', name: 'Colorful' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-opacity-20 hover:bg-gray-500 transition-colors">
        <ThemeIcon theme={theme} />
        <span className="hidden md:inline">Theme</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-2 w-40 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id as any)}
              className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                theme === t.id 
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <ThemeIcon theme={t.id} />
              <span className="ml-2">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;