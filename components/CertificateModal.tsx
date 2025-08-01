
'use client';

import { useLanguage } from '@/lib/language-context';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: any;
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  const { t } = useLanguage();

  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer z-10"
          >
            <i className="ri-close-line w-8 h-8 flex items-center justify-center"></i>
          </button>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img 
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 lg:h-80 object-cover object-top rounded-lg"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">{certificate.title}</h2>
                <p className="text-orange-500 text-lg mb-6">{certificate.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('certificateDetails'as any) || 'Certificate Details'}</h3>
                    <p className="text-gray-300">{certificate.details}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('scope'as any) || 'Scope'}</h3>
                    <p className="text-gray-300">{certificate.scope}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('validity'as any) || 'Validity'}</h3>
                    <p className="text-gray-300">{certificate.validity}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('certificationBody'as any) || 'Certification Body'}</h3>
                    <p className="text-gray-300">{certificate.certificationBody}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
