import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images?: string[];
  title: string;
}

export function ImageGallery({ images = [], title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  // If no images provided, return null or a placeholder
  if (!images.length) {
    return (
      <div className="aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Нет доступных изображений</p>
      </div>
    );
  }

  const visibleImages = showAll ? images : images.slice(0, 3);

  const handleImageClick = (index: number) => {
    setFullscreenImage(index);
  };

  const handlePrevImage = () => {
    if (fullscreenImage === null) return;
    setFullscreenImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    if (fullscreenImage === null) return;
    setFullscreenImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (fullscreenImage === null) return;

    switch (e.key) {
      case 'ArrowLeft':
        handlePrevImage();
        break;
      case 'ArrowRight':
        handleNextImage();
        break;
      case 'Escape':
        setFullscreenImage(null);
        break;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 aspect-[16/9] rounded-lg overflow-hidden">
          <img
            src={images[selectedImage ?? 0]}
            alt={`${title} - Основное фото`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => handleImageClick(selectedImage ?? 0)}
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
          {visibleImages.map((image, index) => (
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
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 3 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          Показать все фото ({images.length})
        </button>
      )}

      {/* Fullscreen Image Viewer */}
      {fullscreenImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img
            src={images[fullscreenImage]}
            alt={`${title} - Полный размер`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
          
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {fullscreenImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}