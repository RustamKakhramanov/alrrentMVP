import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Star, ArrowLeft, Check } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { HostCTA } from '../components/HostCTA';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';
import { SPACES } from '../data/spaces';

export function SpaceDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { id } = useParams();
  
  const spaceDetails = id ? SPACES[Number(id)] : null;

  if (!spaceDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Совсем скоро помещение начнет свою работу на нашем сервисе и вы сможете арендовать его для своего события
          </h1>
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-700"
          >
            На главную
          </Link>
        </div>
      </div>
    );
  }

  const handleBookingClick = () => {
    trackEvent(analyticsConfig.googleAnalytics.events.bookingAttempt, {
      spaceId: id,
      spaceTitle: spaceDetails.title
    });
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Back button */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            На главную
          </Link>
        </div>

        {/* Image gallery */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 aspect-[16/9] rounded-lg overflow-hidden">
              <img
                src={spaceDetails.images[selectedImage]}
                alt={spaceDetails.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 md:grid-cols-1 gap-4">
              {spaceDetails.images.map((image, index) => (
                <div
                  key={index}
                  className={`
                    aspect-[4/3] rounded-lg overflow-hidden cursor-pointer
                    ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}
                  `}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${spaceDetails.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-4">{spaceDetails.title}</h1>
                  <div className="flex flex-wrap items-center gap-6 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{spaceDetails.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      <span>До {spaceDetails.capacity} чел.</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      <span>{spaceDetails.rating}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Описание</h2>
                  <p className="text-gray-600">{spaceDetails.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Удобства</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {spaceDetails.amenities.map((amenity) => (
                      <div key={amenity.id} className="flex items-center space-x-2">
                        <div className="text-green-500">
                          <Check className="w-5 h-5" />
                        </div>
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Оборудование</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {spaceDetails.equipment.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <div className="text-green-500">
                          <Check className="w-5 h-5" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl border p-6">
                <div className="text-2xl font-bold mb-2">
                  {spaceDetails.price.toLocaleString()} ₸
                  <span className="text-base font-normal text-gray-600">/час</span>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleBookingClick}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Забронировать
                  </button>
                </div>

                <div className="mt-4 text-sm text-gray-500 text-center">
                  Бесплатная отмена за 24 часа до начала
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Host CTA Section */}
        <HostCTA />
      </main>

      <Footer />

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        spaceTitle={spaceDetails.title}
      />
    </div>
  );
}