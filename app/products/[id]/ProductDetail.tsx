
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const { t } = useLanguage();

  const getProductFeatures = (id: string) => {
    const features = {
      'concrete-floors': [
        t('concreteFeature1'),
        t('concreteFeature2'),
        t('concreteFeature3'),
        t('concreteFeature4'),
        t('concreteFeature5'),
        t('concreteFeature6'),
        t('concreteFeature7'),
        t('concreteFeature8')
      ],
      'topping-system': [
        t('toppingFeature1'),
        t('toppingFeature2'),
        t('toppingFeature3'),
        t('toppingFeature4'),
        t('toppingFeature5'),
        t('toppingFeature6'),
        t('toppingFeature7'),
        t('toppingFeature8')
      ],
      'epoxy-floors': [
        t('epoxyFeature1'),
        t('epoxyFeature2'),
        t('epoxyFeature3'),
        t('epoxyFeature4'),
        t('epoxyFeature5'),
        t('epoxyFeature6'),
        t('epoxyFeature7'),
        t('epoxyFeature8')
      ],
      'polyurethane-floors': [
        t('polyurethaneFeature1'),
        t('polyurethaneFeature2'),
        t('polyurethaneFeature3'),
        t('polyurethaneFeature4'),
        t('polyurethaneFeature5'),
        t('polyurethaneFeature6'),
        t('polyurethaneFeature7'),
        t('polyurethaneFeature8')
      ],
      'polyurea-coating': [
        t('polyureaFeature1'),
        t('polyureaFeature2'),
        t('polyureaFeature3'),
        t('polyureaFeature4'),
        t('polyureaFeature5'),
        t('polyureaFeature6'),
        t('polyureaFeature7'),
        t('polyureaFeature8')
      ]
    };
    return features[id as keyof typeof features] || [];
  };

  const getProductTechnicalSpecs = (id: string) => {
    const specs = {
      'concrete-floors': [
        { spec: t('compressiveStrength'), value: t('concreteCompressiveStrength') },
        { spec: t('flexuralStrength'), value: t('concreteFlexuralStrength') },
        { spec: t('surfaceHardness'), value: t('concreteSurfaceHardness') },
        { spec: t('abrasionResistance'), value: t('concreteAbrasionResistance') },
        { spec: t('workingTemperature'), value: t('concreteWorkingTemperature') },
        { spec: t('serviceLife'), value: t('concreteServiceLife') },
        { spec: t('density'), value: t('concreteDensity') },
        { spec: t('waterAbsorption'), value: t('concreteWaterAbsorption') }
      ],
      'topping-system': [
        { spec: t('compressiveStrength'), value: t('toppingCompressiveStrength') },
        { spec: t('surfaceHardness'), value: t('toppingSurfaceHardness') },
        { spec: t('abrasionResistance'), value: t('toppingAbrasionResistance') },
        { spec: t('impactResistance'), value: t('toppingImpactResistance') },
        { spec: t('dustResistance'), value: t('toppingDustResistance') },
        { spec: t('colorOptions'), value: t('toppingColorOptions') },
        { spec: t('consumption'), value: t('toppingConsumption') },
        { spec: t('fireRating'), value: t('toppingFireRating') }
      ],
      'epoxy-floors': [
        { spec: t('chemicalResistance'), value: t('epoxyChemicalResistance') },
        { spec: t('tensileStrength'), value: t('epoxyTensileStrength') },
        { spec: t('adhesionStrength'), value: t('epoxyAdhesionStrength') },
        { spec: t('workingTemperature'), value: t('epoxyWorkingTemperature') },
        { spec: t('cureTime'), value: t('epoxyCureTime') },
        { spec: t('thickness'), value: t('epoxyThickness') },
        { spec: t('glossLevel'), value: t('epoxyGlossLevel') },
        { spec: t('thermalExpansion'), value: t('epoxyThermalExpansion') }
      ],
      'polyurethane-floors': [
        { spec: t('elongationAtBreak'), value: t('polyurethaneElongation') },
        { spec: t('temperatureResistance'), value: t('polyurethaneTemperature') },
        { spec: t('chemicalResistance'), value: t('polyurethaneChemicalResistance') },
        { spec: t('uvResistance'), value: t('polyurethaneUvResistance') },
        { spec: t('flexibility'), value: t('polyurethaneFlexibility') },
        { spec: t('repairability'), value: t('polyurethaneRepairability') },
        { spec: t('tensileStrength'), value: t('polyurethaneTensileStrength') },
        { spec: t('thickness'), value: t('polyurethaneThickness') }
      ],
      'polyurea-coating': [
        { spec: t('setTime'), value: t('polyureaSetTime') },
        { spec: t('tensileStrength'), value: t('polyureaTensileStrength') },
        { spec: t('elongationAtBreak'), value: t('polyureaElongation') },
        { spec: t('temperatureResistance'), value: t('polyureaTemperature') },
        { spec: t('chemicalResistance'), value: t('polyureaChemicalResistance') },
        { spec: t('waterproofing'), value: t('polyureaWaterproofing') },
        { spec: t('thickness'), value: t('polyureaThickness') },
        { spec: t('adhesionStrength'), value: t('polyureaAdhesionStrength') }
      ]
    };
    return specs[id as keyof typeof specs] || [];
  };

  const getProductApplications = (id: string) => {
    const applications = {
      'concrete-floors': [
        t('concreteApp1'),
        t('concreteApp2'),
        t('concreteApp3'),
        t('concreteApp4'),
        t('concreteApp5'),
        t('concreteApp6'),
        t('concreteApp7'),
        t('concreteApp8')
      ],
      'topping-system': [
        t('toppingApp1'),
        t('toppingApp2'),
        t('toppingApp3'),
        t('toppingApp4'),
        t('toppingApp5'),
        t('toppingApp6'),
        t('toppingApp7'),
        t('toppingApp8')
      ],
      'epoxy-floors': [
        t('epoxyApp1'),
        t('epoxyApp2'),
        t('epoxyApp3'),
        t('epoxyApp4'),
        t('epoxyApp5'),
        t('epoxyApp6'),
        t('epoxyApp7'),
        t('epoxyApp8')
      ],
      'polyurethane-floors': [
        t('polyurethaneApp1'),
        t('polyurethaneApp2'),
        t('polyurethaneApp3'),
        t('polyurethaneApp4'),
        t('polyurethaneApp5'),
        t('polyurethaneApp6'),
        t('polyurethaneApp7'),
        t('polyurethaneApp8')
      ],
      'polyurea-coating': [
        t('polyureaApp1'),
        t('polyureaApp2'),
        t('polyureaApp3'),
        t('polyureaApp4'),
        t('polyureaApp5'),
        t('polyureaApp6'),
        t('polyureaApp7'),
        t('polyureaApp8')
      ]
    };
    return applications[id as keyof typeof applications] || [];
  };

  const products = {
    'concrete-floors': {
      title: t('concreteFloors'),
      description: t('concreteFloorsDetailedDesc'),
      image: 'https://readdy.ai/api/search-image?query=Professional%20concrete%20floor%20installation%20in%20modern%20industrial%20warehouse%20with%20smooth%20gray%20surface%2C%20industrial%20lighting%20highlighting%20the%20durable%20concrete%20flooring%20system%2C%20dark%20industrial%20atmosphere%20with%20quality%20finish&width=800&height=600&seq=601&orientation=landscape',
      price: 'from $12/m²',
      features: getProductFeatures('concrete-floors'),
      technicalSpecs: getProductTechnicalSpecs('concrete-floors'),
      applications: getProductApplications('concrete-floors')
    },
    'topping-system': {
      title: t('toppingSystem'),
      description: t('toppingSystemDetailedDesc'),
      image: 'https://readdy.ai/api/search-image?query=Industrial%20topping%20floor%20system%20application%20with%20dry%20shake%20hardener%20on%20fresh%20concrete%20surface%2C%20professional%20installation%20showing%20texture%20and%20durability%20enhancement%2C%20dark%20industrial%20workshop%20environment&width=800&height=600&seq=602&orientation=landscape',
      price: 'from $15/m²',
      features: getProductFeatures('topping-system'),
      technicalSpecs: getProductTechnicalSpecs('topping-system'),
      applications: getProductApplications('topping-system')
    },
    'epoxy-floors': {
      title: t('epoxyFloors'),
      description: t('epoxyFloorsDetailedDesc'),
      image: 'https://readdy.ai/api/search-image?query=Modern%20epoxy%20floor%20coating%20in%20industrial%20facility%20with%20smooth%20glossy%20surface%20reflecting%20lights%2C%20chemical%20resistant%20flooring%20system%20in%20clean%20professional%20environment%2C%20dark%20industrial%20setting%20with%20bright%20finish&width=800&height=600&seq=603&orientation=landscape',
      price: 'from $25/m²',
      features: getProductFeatures('epoxy-floors'),
      technicalSpecs: getProductTechnicalSpecs('epoxy-floors'),
      applications: getProductApplications('epoxy-floors')
    },
    'polyurethane-floors': {
      title: t('polyurethaneFloors'),
      description: t('polyurethaneFloorsDetailedDesc'),
      image: 'https://readdy.ai/api/search-image?query=High-performance%20polyurethane%20floor%20coating%20in%20modern%20industrial%20setting%20with%20excellent%20elasticity%20and%20durability%2C%20professional%20installation%20showing%20smooth%20finish%20and%20chemical%20resistance%2C%20dark%20industrial%20atmosphere&width=800&height=600&seq=604&orientation=landscape',
      price: 'from $30/m²',
      features: getProductFeatures('polyurethane-floors'),
      technicalSpecs: getProductTechnicalSpecs('polyurethane-floors'),
      applications: getProductApplications('polyurethane-floors')
    },
    'polyurea-coating': {
      title: t('polyureaCoating'),
      description: t('polyureaCoatingDetailedDesc'),
      image: 'https://readdy.ai/api/search-image?query=Professional%20polyurea%20coating%20application%20in%20industrial%20environment%20with%20spray%20equipment%2C%20fast-curing%20protective%20coating%20system%20showing%20seamless%20finish%20and%20chemical%20resistance%2C%20dark%20industrial%20workshop%20setting&width=800&height=600&seq=605&orientation=landscape',
      price: 'from $35/m²',
      features: getProductFeatures('polyurea-coating'),
      technicalSpecs: getProductTechnicalSpecs('polyurea-coating'),
      applications: getProductApplications('polyurea-coating')
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">{t('productNotFound')}</h1>
          <Link href="/products" className="text-orange-500 hover:text-orange-400 cursor-pointer">
            {t('backToProducts')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav className="text-gray-400 mb-6">
                <Link href="/" className="hover:text-white cursor-pointer">{t('home')}</Link>
                <span className="mx-2">/</span>
                <Link href="/products" className="hover:text-white cursor-pointer">{t('products')}</Link>
                <span className="mx-2">/</span>
                <span className="text-orange-500">{product.title}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {product.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                {product.description}
              </p>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
                />
              </div>
              
              <div>
                <div className="mb-8">
                  <span className="text-3xl font-bold text-orange-500">{product.price}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{t('productOverview')}</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/order"
                    className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    {t('orderNow')}
                  </Link>
                  <a 
                    href="tel:+74951234567"
                    className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors cursor-pointer whitespace-nowrap text-center"
                  >
                    {t('callForQuote')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('keyFeatures')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="ri-check-line text-white w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <div>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('technicalSpecs')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-700/50 rounded-lg shadow-lg p-8 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.technicalSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-600 pb-3">
                      <span className="font-medium text-gray-300">{spec.spec}</span>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('applications')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.applications.map((application, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-building-line text-white w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <p className="text-gray-300 font-medium">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('otherSolutions')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(products)
                .filter(([id]) => id !== productId)
                .slice(0, 3)
                .map(([id, prod]) => (
                  <div key={id} className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative h-48">
                      <img 
                        src={prod.image} 
                        alt={prod.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{prod.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{prod.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-500 font-bold">{prod.price}</span>
                        <Link 
                          href={`/products/${id}`}
                          className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap"
                        >
                          {t('viewDetails')}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('readyToStart')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('readyToStartDesc')}
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
