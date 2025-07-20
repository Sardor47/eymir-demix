
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

  const products = {
    'concrete-floors': {
      title: t('concreteFloors'),
      description: t('concreteFloorsDesc'),
      image: 'https://readdy.ai/api/search-image?query=Professional%20concrete%20floor%20installation%20in%20modern%20industrial%20warehouse%20with%20smooth%20gray%20surface%2C%20industrial%20lighting%20highlighting%20the%20durable%20concrete%20flooring%20system%2C%20dark%20industrial%20atmosphere%20with%20quality%20finish&width=800&height=600&seq=601&orientation=landscape',
      price: 'from $12/m²',
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
      specifications: {
        'Compressive Strength': '≥80 MPa',
        'Flexural Strength': '≥8 MPa',
        'Abrasion Resistance': '≤40 mg',
        'Water Absorption': '≤5%',
        'Density': '2400 kg/m³',
        'Service Life': '25+ years'
      }
    },
    'topping-system': {
      title: t('toppingSystem'),
      description: t('toppingSystemDesc'),
      image: 'https://readdy.ai/api/search-image?query=Industrial%20topping%20floor%20system%20application%20with%20dry%20shake%20hardener%20on%20fresh%20concrete%20surface%2C%20professional%20installation%20showing%20texture%20and%20durability%20enhancement%2C%20dark%20industrial%20workshop%20environment&width=800&height=600&seq=602&orientation=landscape',
      price: 'from $15/m²',
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
      specifications: {
        'Consumption': '3-5 kg/m²',
        'Compressive Strength': '≥70 MPa',
        'Surface Hardness': '≥65 Shore D',
        'Abrasion Resistance': '≤35 mg',
        'Impact Resistance': 'High',
        'Fire Rating': 'Class A1'
      }
    },
    'epoxy-floors': {
      title: t('epoxyFloors'),
      description: t('epoxyFloorsDesc'),
      image: 'https://readdy.ai/api/search-image?query=Modern%20epoxy%20floor%20coating%20in%20industrial%20facility%20with%20smooth%20glossy%20surface%20reflecting%20lights%2C%20chemical%20resistant%20flooring%20system%20in%20clean%20professional%20environment%2C%20dark%20industrial%20setting%20with%20bright%20finish&width=800&height=600&seq=603&orientation=landscape',
      price: 'from $25/m²',
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
      specifications: {
        'Thickness': '2-5 mm',
        'Tensile Strength': '≥18 MPa',
        'Chemical Resistance': 'Excellent',
        'Temperature Range': '-10°C to +60°C',
        'Cure Time': '24-48 hours',
        'Gloss Level': '80-90%'
      }
    },
    'polyurethane-floors': {
      title: t('polyurethaneFloors'),
      description: t('polyurethaneFloorsDesc'),
      image: 'https://readdy.ai/api/search-image?query=High-performance%20polyurethane%20floor%20coating%20in%20modern%20industrial%20setting%20with%20excellent%20elasticity%20and%20durability%2C%20professional%20installation%20showing%20smooth%20finish%20and%20chemical%20resistance%2C%20dark%20industrial%20atmosphere&width=800&height=600&seq=604&orientation=landscape',
      price: 'from $30/m²',
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
      specifications: {
        'Thickness': '1-3 mm',
        'Tensile Strength': '≥20 MPa',
        'Elongation': '≥100%',
        'Chemical Resistance': 'Excellent',
        'UV Resistance': 'High',
        'Service Temperature': '-30°C to +80°C'
      }
    },
    'polyurea-coating': {
      title: t('polyureaCoating'),
      description: t('polyureaCoatingDesc'),
      image: 'https://readdy.ai/api/search-image?query=Professional%20polyurea%20coating%20application%20in%20industrial%20environment%20with%20spray%20equipment%2C%20fast-curing%20protective%20coating%20system%20showing%20seamless%20finish%20and%20chemical%20resistance%2C%20dark%20industrial%20workshop%20setting&width=800&height=600&seq=605&orientation=landscape',
      price: 'from $35/m²',
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
      specifications: {
        'Thickness': '1-5 mm',
        'Tensile Strength': '≥25 MPa',
        'Elongation': '≥300%',
        'Chemical Resistance': 'Superior',
        'Cure Time': '30 seconds',
        'Service Temperature': '-40°C to +120°C'
      }
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

        {/* Product Details */}
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
                
                <h3 className="text-2xl font-bold text-white mb-6">{t('keyFeatures')}</h3>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center mr-3 mt-0.5"></i>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
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

        {/* Specifications */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{t('technicalSpecs')}</h3>
                <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="font-medium text-gray-300">{key}</span>
                        <span className="text-gray-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{t('applications')}</h3>
                <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 backdrop-blur-sm">
                  <ul className="space-y-3">
                    {product.applications.map((application, index) => (
                      <li key={index} className="flex items-center">
                        <i className="ri-building-line text-orange-500 w-5 h-5 flex items-center justify-center mr-3"></i>
                        <span className="text-gray-300">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-white mb-12 text-center">
              {t('otherSolutions')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(products)
                .filter(([id]) => id !== productId)
                .slice(0, 3)
                .map(([id, prod]) => (
                  <div key={id} className="bg-gray-700/50 rounded-lg overflow-hidden hover:bg-gray-700/70 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative h-48">
                      <img 
                        src={prod.image} 
                        alt={prod.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2">{prod.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{prod.description}</p>
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
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
