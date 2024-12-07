import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PhoneInput } from './PhoneInput';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';
import { sendTelegramMessage } from '../services/telegram';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  spaceTitle: string;
}

export function BookingModal({ isOpen, onClose, spaceTitle }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
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
        `Бронирование помещения: ${spaceTitle}`
      );

      if (success) {
        trackEvent(analyticsConfig.googleAnalytics.events.feedbackSubmit, {
          source: 'booking_modal',
          spaceTitle,
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
      <div className="relative bg-white rounded-xl p-6 max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold mb-2">Заявка отправлена</h3>
            <p className="text-gray-600">
              Менеджер свяжется с вами в ближайшее время для подтверждения бронирования
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2">Забронировать помещение</h2>
            <p className="text-gray-600 mb-6">
              Для подтверждения бронирования оставьте свои контактные данные. 
              Менеджер помещения свяжется с вами в ближайшее время через WhatsApp или Telegram 
              для уточнения деталей.
            </p>

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
                  w-full bg-blue-600 text-white py-3 rounded-lg transition-colors
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