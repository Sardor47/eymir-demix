
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CertificateModal from '@/components/CertificateModal';
import { useLanguage } from '@/lib/language-context';
import { useState } from 'react';

export default function About() {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      image: 'https://readdy.ai/api/search-image?query=Professional%20ISO%209001%20quality%20management%20certificate%20document%20with%20official%20seal%20and%20branding%2C%20clean%20white%20background%20with%20formal%20certification%20design%20elements%2C%20dark%20professional%20appearance&width=600&height=400&seq=201&orientation=landscape'
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management',
      image: 'https://readdy.ai/api/search-image?query=Environmental%20management%20ISO%2014001%20certificate%20with%20green%20elements%20and%20sustainability%20symbols%2C%20professional%20certification%20document%20layout%20with%20official%20formatting%2C%20dark%20industrial%20theme&width=600&height=400&seq=202&orientation=landscape'
    },
    {
      title: 'OHSAS 18001',
      description: 'Occupational Health & Safety',
      image: 'https://readdy.ai/api/search-image?query=Occupational%20health%20and%20safety%20OHSAS%2018001%20certificate%20with%20safety%20symbols%20and%20professional%20certification%20design%2C%20clean%20document%20layout%20with%20security%20elements%2C%20dark%20professional%20style&width=600&height=400&seq=203&orientation=landscape'
    }
  ];

  const partners = [
    {
      name: 'BASF',
      logo: 'https://readdy.ai/api/search-image?query=BASF%20chemical%20company%20logo%20on%20white%20background%2C%20professional%20corporate%20branding%20with%20clean%20design%20and%20company%20colors%2C%20modern%20industrial%20partner%20logo&width=200&height=100&seq=301&orientation=landscape'
    },
    {
      name: 'Sika',
      logo: 'https://readdy.ai/api/search-image?query=Sika%20construction%20chemicals%20company%20logo%20on%20white%20background%2C%20professional%20corporate%20identity%20with%20modern%20design%20elements%2C%20industrial%20partner%20branding&width=200&height=100&seq=302&orientation=landscape'
    },
    {
      name: 'Mapei',
      logo: 'https://readdy.ai/api/search-image?query=Mapei%20building%20materials%20company%20logo%20on%20white%20background%2C%20clean%20corporate%20branding%20with%20professional%20design%2C%20construction%20industry%20partner%20logo&width=200&height=100&seq=303&orientation=landscape'
    },
    {
      name: 'Huntsman',
      logo: 'https://readdy.ai/api/search-image?query=Huntsman%20chemical%20corporation%20logo%20on%20white%20background%2C%20professional%20corporate%20identity%20with%20modern%20branding%20elements%2C%20industrial%20chemical%20partner%20logo&width=200&height=100&seq=304&orientation=landscape'
    }
  ];

  const handleCertificateClick = (certificate: any) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('aboutTitle')}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {t('aboutSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {t('ourStory')}
                </h2>
                <p className="text-gray-300 mb-6">
                  Founded in 2008, Eymir Demix has become a trusted name in industrial flooring solutions. 
                  We started as a small team of passionate engineers and have grown into a leading 
                  company serving clients across multiple industries.
                </p>
                <p className="text-gray-300 mb-6">
                  Our commitment to quality, innovation, and customer satisfaction has driven our 
                  success. We continuously invest in research and development to bring the latest 
                  technologies and materials to our clients.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-gray-700/50 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                    <div className="text-gray-300">{t('projectsCompleted')}</div>
                  </div>
                  <div className="text-center bg-gray-700/50 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                    <div className="text-gray-300">{t('yearsExperience')}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20industrial%20flooring%20company%20office%20and%20warehouse%20facility%20with%20professional%20team%20members%20working%20on%20floor%20installation%20projects%2C%20clean%20bright%20environment%20showcasing%20expertise%20and%20professionalism%2C%20dark%20industrial%20atmosphere&width=600&height=400&seq=205&orientation=landscape"
                  alt="Eymir Demix facility"
                  className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('ourTeam')}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experienced professionals dedicated to delivering excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center backdrop-blur-sm">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20CEO%20portrait%20of%20middle-aged%20man%20in%20business%20suit%2C%20confident%20leadership%20pose%20against%20clean%20corporate%20background%2C%20high-quality%20professional%20headshot%20with%20warm%20lighting%2C%20industrial%20executive%20style&width=300&height=300&seq=401&orientation=squarish"
                  alt="CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-bold text-white mb-2">Alexander Petrov</h3>
                <p className="text-orange-500 mb-3">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  15+ years experience in industrial construction and flooring solutions
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 text-center backdrop-blur-sm">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20CTO%20portrait%20of%20experienced%20engineer%20in%20business%20attire%2C%20technical%20leadership%20pose%20with%20clean%20corporate%20background%2C%20high-quality%20professional%20headshot%20with%20modern%20lighting%2C%20industrial%20technology%20executive&width=300&height=300&seq=402&orientation=squarish"
                  alt="CTO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-bold text-white mb-2">Maria Ivanova</h3>
                <p className="text-orange-500 mb-3">Chief Technology Officer</p>
                <p className="text-gray-300 text-sm">
                  PhD in Chemical Engineering, specialist in polymer coatings
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 text-center backdrop-blur-sm">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20operations%20manager%20portrait%20in%20business%20suit%2C%20experienced%20leadership%20pose%20against%20clean%20corporate%20background%2C%20high-quality%20professional%20headshot%20with%20professional%20lighting%2C%20industrial%20operations%20executive&width=300&height=300&seq=403&orientation=squarish"
                  alt="Operations Manager"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-bold text-white mb-2">Dmitry Kozlov</h3>
                <p className="text-orange-500 mb-3">Operations Manager</p>
                <p className="text-gray-300 text-sm">
                  Project management expert with 12+ years in industrial construction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('certificates')} & Quality Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We maintain the highest quality standards through certified processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gray-700/50 rounded-lg p-6 text-center backdrop-blur-sm cursor-pointer hover:bg-gray-700/70 transition-colors group"
                  onClick={() => handleCertificateClick(cert)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <i className="ri-eye-line w-8 h-8 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-300 mb-2">{cert.description}</p>
                  <p className="text-orange-500 text-sm">Click to view details</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('partners')} & Suppliers
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We work with world-class material suppliers and technology partners
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 flex items-center justify-center backdrop-blur-sm">
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6">{t('ourMission')}</h2>
                <p className="text-lg opacity-90">
                  To provide innovative, sustainable, and high-quality flooring solutions 
                  that exceed our clients' expectations while contributing to the advancement 
                  of industrial infrastructure.
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6">{t('ourVision')}</h2>
                <p className="text-lg opacity-90">
                  To be the leading provider of industrial flooring solutions globally, 
                  recognized for our innovation, quality, and commitment to environmental 
                  sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
      
      {/* Certificate Modal */}
      <CertificateModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        certificate={selectedCertificate}
      />
    </div>
  );
}
