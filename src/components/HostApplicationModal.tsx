import React, { useState } from 'react';
import { X, Building2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { PhoneInput } from './PhoneInput';
import { sendTelegramMessage } from '../services/telegram';

interface HostApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HostApplicationModal({ isOpen, onClose }: HostApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.phone.length !== 11) {
      setError('Пожалуйста, введите корректный номер телефона');
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendTelegramMessage(
        formData.name,
        formData.phone,
        'Заявка: Разместить помещение'
      );

      if (success) {
        trackEvent('host_signup', {
          source: 'host_application_form',
          ...formData
        });

        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '' });
          onClose();
        }, 2000);
      } else {
        setError('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
      }
    } catch (err) {
      setError('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
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
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Заявка отправлена</h3>
            <p className="text-gray-600">
              Наш менеджер свяжется с вами в ближайшее время для обсуждения условий размещения
            </p>
          </div>
        ) : (
          <>
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

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                {error}
              </div>
            )}
            
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
                disabled={isSubmitting}
                className={`
                  w-full bg-blue-600 text-white py-3 rounded-lg transition-colors font-medium
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'}
                `}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}