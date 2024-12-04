import React from 'react';
import { MapPin, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';

interface SpaceCardProps {
  id: number;
  images: string[];
  title: string;
  location: string;
  price: number;
  capacity: number;
  rating: number;
}

export function SpaceCard({ id, images, title, location, price, capacity, rating }: SpaceCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    trackEvent(analyticsConfig.googleAnalytics.events.spaceView, {
      spaceId: id,
      spaceTitle: title,
      spaceLocation: location
    });
    navigate(`/spaces/${id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div 
        className="h-48 md:h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[0]})` }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>До {capacity} чел.</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">{price.toLocaleString()} ₸/час</span>
        </div>
      </div>
    </div>
  );
}