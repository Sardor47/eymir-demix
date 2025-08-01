
'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://static.readdy.ai/image/17b4ed7d4e8f64de93367274ae7b3b5e/a7dade4003030cb5876b21dc70d77cef.png"
                alt="Eymir Demix Logo"
                className="h-8 w-8"
              />
              <h3 className="text-xl font-bold text-white">
                Eymir Demix
              </h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              {t('footerSlogan')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                <i className="ri-telegram-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                <i className="ri-whatsapp-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                <i className="ri-instagram-line w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                  {t('order')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('contactInfo')}</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-center text-gray-400">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2 text-orange-500"></i>
                <a href="tel:+992 92 7475665" className="hover:text-orange-500 transition-colors cursor-pointer">
                  +992 92 7475665
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2 text-orange-500"></i>
                <a href="mailto:info@eymirdemix.com" className="hover:text-orange-500 transition-colors cursor-pointer">
                  info@eymirdemix.com
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-2 mt-0.5 text-orange-500"></i>
                <span> 41, Pulodi Street, Dushanbe, Tajikistan</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('followUs')}</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">{t('footerSloganfollow')}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 text-sm flex-1"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap text-sm">{t('subscribe')}</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            2024 Eymir Demix. {t('allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
