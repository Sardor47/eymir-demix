
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white" style={{
        backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20industrial%20flooring%20installation%20workspace%20with%20modern%20equipment%20and%20skilled%20workers%2C%20spacious%20warehouse%20environment%20with%20proper%20lighting%2C%20showcasing%20quality%20industrial%20floor%20coating%20process%20and%20professional%20craftsmanship%2C%20dark%20industrial%20atmosphere&width=1920&height=1080&seq=5&orientation=landscape')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link 
                href="/products"
                className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                {t('viewProducts')}
              </Link>
              <Link 
                href="/order"
                className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                {t('orderConsultation')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t('ourValues')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              {t('ourValuesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-shield-check-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t('qualityFirst')}</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t('qualityFirstDesc')}
              </p>
            </div>
            
            <div className="text-center bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-lightbulb-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t('innovation')}</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t('innovationDesc')}
              </p>
            </div>
            
            <div className="text-center bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-award-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{t('reliability')}</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t('reliabilityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t('companyStats')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-300 text-sm sm:text-base">{t('projectsCompleted')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-300 text-sm sm:text-base">{t('yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">300+</div>
              <div className="text-gray-300 text-sm sm:text-base">{t('happyClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-gray-300 text-sm sm:text-base">{t('teamMembers')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t('ourServices')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              {t('ourServicesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-chat-3-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('consultation')}</h3>
              <p className="text-gray-300 mb-6">
                {t('consultationDesc')}
              </p>
              <Link 
                href="/order" 
                className="text-orange-500 hover:text-orange-400 font-medium cursor-pointer transition-colors"
              >
                {t('learnMore')} <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-tools-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('installation')}</h3>
              <p className="text-gray-300 mb-6">
                {t('installationDesc')}
              </p>
              <Link 
                href="/products" 
                className="text-orange-500 hover:text-orange-400 font-medium cursor-pointer transition-colors"
              >
                {t('learnMore')} <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-settings-3-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('maintenance')}</h3>
              <p className="text-gray-300 mb-6">
                {t('maintenanceDesc')}
              </p>
              <Link 
                href="/about" 
                className="text-orange-500 hover:text-orange-400 font-medium cursor-pointer transition-colors"
              >
                {t('learnMore')} <i className="ri-arrow-right-line ml-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            {t('сontactUsForA')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link 
              href="/order"
              className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
            >
              {t('getQuote')}
            </Link>
            <a 
              href="tel:+74951234567"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors cursor-pointer whitespace-nowrap text-center"
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
