'use client';

import { useState } from 'react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    description: string;
    image: string;
    details?: string;
  };
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">{certificate.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-gray-700"
            >
              <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <img 
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{certificate.description}</h3>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">Certificate Details:</h4>
                  <p className="text-sm">
                    This certification demonstrates our commitment to maintaining the highest standards 
                    in our industry. Our certified processes ensure consistent quality and reliability 
                    in all our projects.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">Scope of Certification:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Industrial flooring installation</li>
                    <li>• Quality control procedures</li>
                    <li>• Material testing and validation</li>
                    <li>• Project management standards</li>
                    <li>• Customer service excellence</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">Validity:</h4>
                  <p className="text-sm">
                    This certificate is valid for 3 years from the date of issue and is subject 
                    to annual surveillance audits to ensure continued compliance.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-500 mb-2">Certification Body:</h4>
                  <p className="text-sm">
                    Issued by internationally recognized certification authority with global 
                    accreditation and industry expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}