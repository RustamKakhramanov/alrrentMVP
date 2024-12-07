import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';
import { PhoneInput } from '../components/PhoneInput';
import { sendTelegramMessage } from '../services/telegram';

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.phone || !formData.password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    if (formData.phone.length !== 11) {
      setError('Пожалуйста, введите корректный номер телефона');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendTelegramMessage(
        'Неизвестный пользователь',
        formData.phone,
        'Авторизация'
      );

      trackEvent(analyticsConfig.googleAnalytics.events.login, {
        method: 'phone'
      });

      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } catch (err) {
      setError('Произошла ошибка при входе. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="p-4">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          На главную
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Вход в аккаунт</h1>
            <p className="text-gray-600 mt-2">
              Нет аккаунта?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700">
                Зарегистрироваться
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Пароль
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Введите пароль"
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
              {isSubmitting ? 'Вход...' : 'Войти'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}