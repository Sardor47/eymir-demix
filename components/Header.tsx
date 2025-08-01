
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'uz', name: 'O\'zbek' },
    { code: 'tj', name: 'Тоҷикӣ' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/17b4ed7d4e8f64de93367274ae7b3b5e/ae4a9ea1104b12ef2f38043206ebde6a.png"
              alt="Eymir Demix Logo"
              className="h-12 w-12"
            />
            <span className="text-xl sm:text-2xl font-bold text-white">
              Eymir Demix
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer whitespace-nowrap">
              {t('home')}
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer whitespace-nowrap">
              {t('products')}
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer whitespace-nowrap">
              {t('about')}
            </Link>
            <Link href="/order" className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer whitespace-nowrap">
              {t('order')}
            </Link>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-1 sm:space-x-2 text-gray-300 hover:text-orange-500 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition-colors"
              >
                <span className="text-sm sm:text-base">{currentLanguage?.name}</span>
                <i className={`ri-arrow-down-s-line w-4 h-4 flex items-center justify-center transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 sm:w-36 bg-gray-800 rounded-md shadow-lg py-2 z-50 border border-gray-700">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer transition-colors ${
                        language === lang.code ? 'bg-orange-500/20 text-orange-500' : 'text-gray-300'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-orange-500 cursor-pointer p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer py-2 px-4 rounded-md hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                href="/products" 
                className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer py-2 px-4 rounded-md hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('products')}
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer py-2 px-4 rounded-md hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                href="/order" 
                className="text-gray-300 hover:text-orange-500 transition-colors cursor-pointer py-2 px-4 rounded-md hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('order')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
