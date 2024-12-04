import React from 'react';
import { X } from 'lucide-react';

interface SpaceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpaceDetailsModal({ isOpen, onClose }: SpaceDetailsModalProps) {
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
        
        <h2 className="text-2xl font-bold mb-4">Скоро</h2>
        <p className="text-gray-600 mb-6">
          Мы активно работаем над функционалом аренды и просмотра помещений. Совсем скоро вы сможете легко находить и бронировать подходящие пространства для ваших мероприятий прямо на платформе. Оставайтесь с нами — удобство уже на подходе!
        </p>
      </div>
    </div>
  );
}