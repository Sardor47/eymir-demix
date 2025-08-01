
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

interface ProductCardProps {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  price: string;
}

export default function ProductCard({ 
  id, 
  title, 
  shortDescription, 
  fullDescription, 
  image, 
  features, 
  price 
}: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 sm:h-56 md:h-64">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          {price}
        </div>
      </div>
      
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{title}</h3>
        
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base flex-1">
          {isExpanded ? fullDescription : shortDescription}
        </p>
        
        {isExpanded && (
          <div className="mb-3 sm:mb-4">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{t('features')}:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-xs sm:text-sm">{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mt-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer whitespace-nowrap text-sm sm:text-base transition-colors"
          >
            {isExpanded ? t('collapse') : t('expand')}
          </button>
          
          <Link 
            href={`/products/${id}`}
            className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-center text-sm sm:text-base"
          >
            {t('view')}
          </Link>
        </div>
      </div>
    </div>
  );
}
