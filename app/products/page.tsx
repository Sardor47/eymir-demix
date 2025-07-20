
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      id: 'concrete-floors',
      title: t('concreteFloors'),
      description: t('concreteFloorsDesc'),
      image: 'https://readdy.ai/api/search-image?query=Professional%20concrete%20floor%20installation%20in%20modern%20industrial%20warehouse%20with%20smooth%20gray%20surface%2C%20industrial%20lighting%20highlighting%20the%20durable%20concrete%20flooring%20system%2C%20dark%20industrial%20atmosphere%20with%20quality%20finish&width=600&height=400&seq=501&orientation=landscape',
      features: [
        'High compressive strength up to 80 MPa',
        'Excellent durability for heavy loads',
        'Cost-effective solution',
        'Various finish options available',
        'Fast installation process',
        'Suitable for large areas'
      ],
      applications: [
        'Industrial warehouses',
        'Manufacturing facilities',
        'Distribution centers',
        'Retail spaces',
        'Parking structures',
        'Airport terminals'
      ],
      price: 'from $12/m²'
    },
    {
      id: 'topping-system',
      title: t('toppingSystem'),
      description: t('toppingSystemDesc'),
      image: 'https://readdy.ai/api/search-image?query=Industrial%20topping%20floor%20system%20application%20with%20dry%20shake%20hardener%20on%20fresh%20concrete%20surface%2C%20professional%20installation%20showing%20texture%20and%20durability%20enhancement%2C%20dark%20industrial%20workshop%20environment&width=600&height=400&seq=502&orientation=landscape',
      features: [
        '3-5x strength increase over standard concrete',
        'Dust-free surface finish',
        'Abrasion resistance for heavy traffic',
        'Available in multiple colors',
        'Easy maintenance',
        'Non-slip surface options'
      ],
      applications: [
        'Heavy industrial floors',
        'Forklift traffic areas',
        'Production facilities',
        'Automotive workshops',
        'Food processing plants',
        'Chemical storage areas'
      ],
      price: 'from $15/m²'
    },
    {
      id: 'epoxy-floors',
      title: t('epoxyFloors'),
      description: t('epoxyFloorsDesc'),
      image: 'https://readdy.ai/api/search-image?query=Modern%20epoxy%20floor%20coating%20in%20industrial%20facility%20with%20smooth%20glossy%20surface%20reflecting%20lights%2C%20chemical%20resistant%20flooring%20system%20in%20clean%20professional%20environment%2C%20dark%20industrial%20setting%20with%20bright%20finish&width=600&height=400&seq=503&orientation=landscape',
      features: [
        'Excellent chemical resistance',
        'Seamless hygienic surface',
        'Wide range of colors and finishes',
        'Easy to clean and maintain',
        'Anti-static properties available',
        'Decorative options with flakes or patterns'
      ],
      applications: [
        'Pharmaceutical facilities',
        'Food and beverage industry',
        'Laboratories and clean rooms',
        'Healthcare facilities',
        'Electronics manufacturing',
        'Showrooms and retail spaces'
      ],
      price: 'from $25/m²'
    },
    {
      id: 'polyurethane-floors',
      title: t('polyurethaneFloors'),
      description: t('polyurethaneFloorsDesc'),
      image: 'https://readdy.ai/api/search-image?query=High-performance%20polyurethane%20floor%20coating%20in%20modern%20industrial%20setting%20with%20excellent%20elasticity%20and%20durability%2C%20professional%20installation%20showing%20smooth%20finish%20and%20chemical%20resistance%2C%20dark%20industrial%20atmosphere&width=600&height=400&seq=504&orientation=landscape',
      features: [
        'High elasticity and flexibility',
        'Temperature resistance -30°C to +80°C',
        'UV resistance for outdoor use',
        'Impact and abrasion resistance',
        'Thermal shock resistance',
        'Long-term durability'
      ],
      applications: [
        'Cold storage facilities',
        'Outdoor applications',
        'Thermal cycling environments',
        'Food processing areas',
        'Pharmaceutical production',
        'Clean manufacturing areas'
      ],
      price: 'from $30/m²'
    },
    {
      id: 'polyurea-coating',
      title: t('polyureaCoating'),
      description: t('polyureaCoatingDesc'),
      image: 'https://readdy.ai/api/search-image?query=Professional%20polyurea%20coating%20application%20in%20industrial%20environment%20with%20spray%20equipment%2C%20fast-curing%20protective%20coating%20system%20showing%20seamless%20finish%20and%20chemical%20resistance%2C%20dark%20industrial%20workshop%20setting&width=600&height=400&seq=505&orientation=landscape',
      features: [
        'Rapid curing time (30 seconds)',
        'Superior chemical resistance',
        'Seamless waterproof membrane',
        'Wide temperature range operation',
        'Excellent adhesion properties',
        'Flexible and crack-resistant'
      ],
      applications: [
        'Chemical processing plants',
        'Containment areas',
        'Water treatment facilities',
        'Marine environments',
        'Mining operations',
        'Emergency repair situations'
      ],
      price: 'from $35/m²'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('productsTitle')}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {t('productsSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-700/50 rounded-lg overflow-hidden hover:bg-gray-700/70 transition-all duration-300 backdrop-blur-sm">
                  <div className="relative h-64">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">{t('keyFeatures')}:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <i className="ri-check-line text-orange-500 w-4 h-4 flex items-center justify-center mr-2 mt-0.5"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-2">{t('applications')}:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {product.applications.slice(0, 3).map((app, index) => (
                            <li key={index} className="flex items-start">
                              <i className="ri-building-line text-orange-500 w-4 h-4 flex items-center justify-center mr-2 mt-0.5"></i>
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link 
                        href={`/products/${product.id}`}
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap text-center"
                      >
                        {t('viewDetails')}
                      </Link>
                      <Link 
                        href="/order"
                        className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors cursor-pointer whitespace-nowrap text-center"
                      >
                        {t('getQuote')}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('whyChooseTitle')}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {t('whyChooseSubtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-white w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('qualityGuaranteed')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('qualityGuaranteedDesc')}
                </p>
              </div>
              
              <div className="text-center bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-recycle-line text-white w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('ecoFriendly')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('ecoFriendlyDesc')}
                </p>
              </div>
              
              <div className="text-center bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-white w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('fastInstallation')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('fastInstallationDesc')}
                </p>
              </div>
              
              <div className="text-center bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-award-line text-white w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('awardWinning')}</h3>
                <p className="text-gray-300 text-sm">
                  {t('awardWinningDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('readyToTransform')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('readyToTransformDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link 
                href="/order"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                {t('getQuote')}
              </Link>
              <a 
                href="tel:+74951234567"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                {t('contactUs')}
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
