import React, { useState } from 'react';
import { X, Building2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';
import { PhoneInput } from './PhoneInput';

interface HostApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HostApplicationModal({ isOpen, onClose }: HostApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.phone.length !== 11) {
      alert('Пожалуйста, введите корректный номер телефона');
      return;
    }

    trackEvent(analyticsConfig.googleAnalytics.events.hostSignup, {
      source: 'host_application_form'
    });

    // Clear form and close modal
    setFormData({ name: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl p-6 max-w-xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-blue-100 rounded-full">
            <Building2 className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Стать арендодателем</h2>
            <p className="text-gray-600">Начните зарабатывать на своем помещении уже сегодня</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-600">
            Оставьте свои контактные данные, и наш менеджер свяжется с вами для обсуждения условий сотрудничества и размещения вашего помещения на платформе.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваше имя"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Номер телефона
            </label>
            <PhoneInput
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Отправить заявку
          </button>
          
          <p className="text-sm text-gray-500 text-center">
            Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
          </p>
        </form>
      </div>
    </div>
  );
}