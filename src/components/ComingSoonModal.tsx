import React from 'react';
import { X } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl p-6 max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Скоро на сайте</h2>
        <p className="text-gray-600 mb-6">
          В настоящее время мы работаем над наполнением каталога помещений. Если вы владеете помещением и хотите стать частью нашей платформы, оставьте заявку, и мы свяжемся с вами в ближайшее время.
        </p>
        
        <button
          onClick={() => {
            onClose();
            // Add logic to open host application form
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Стать арендодателем
        </button>
      </div>
    </div>
  );
}