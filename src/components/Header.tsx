import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle2, Menu, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';
import { HostApplicationModal } from './HostApplicationModal';

export function Header() {
  const [isHostModalOpen, setIsHostModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleHostClick = () => {
    trackEvent(analyticsConfig.googleAnalytics.events.hostSignup, {
      source: 'header_button'
    });
    setIsHostModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-white text-2xl font-bold relative z-20"
              onClick={() => trackEvent('home_click')}
            >
              AllRent
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden relative z-20 text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                className="text-white hover:text-white/80 transition-colors"
                onClick={handleHostClick}
              >
                Разместить помещение
              </button>
              {isLoggedIn ? (
                <button 
                  className="text-white hover:text-white/80 transition-colors"
                  onClick={() => trackEvent('profile_click')}
                >
                  <UserCircle2 className="w-8 h-8" />
                </button>
              ) : (
                <Link 
                  to="/login" 
                  className="bg-white text-gray-900 px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => trackEvent('login_click')}
                >
                  Войти
                </Link>
              )}
            </div>

            {/* Mobile menu */}
            <div
              className={`
                fixed inset-0 bg-black/95 z-10 md:hidden transition-opacity duration-300
                ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
              `}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <button 
                  className="text-white text-xl hover:text-white/80 transition-colors"
                  onClick={handleHostClick}
                >
                  Разместить помещение
                </button>
                {isLoggedIn ? (
                  <button 
                    className="text-white hover:text-white/80 transition-colors"
                    onClick={() => {
                      trackEvent('profile_click');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <UserCircle2 className="w-10 h-10" />
                  </button>
                ) : (
                  <Link 
                    to="/login" 
                    className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg"
                    onClick={() => {
                      trackEvent('login_click');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Войти
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <HostApplicationModal 
        isOpen={isHostModalOpen}
        onClose={() => setIsHostModalOpen(false)}
      />
    </>
  );
}