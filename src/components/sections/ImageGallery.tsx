import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const ImageGallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4];
  
  // Duplicate images for infinite scroll effect
  const extendedImages = [...images, ...images, ...images];
  
  const [currentIndex, setCurrentIndex] = useState(images.length);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Reset position when reaching the end for seamless infinite scroll
  useEffect(() => {
    if (currentIndex >= images.length * 2) {
      setTimeout(() => {
        setCurrentIndex(images.length);
      }, 300);
    }
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  return (
    <section className="py-12 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${(currentIndex * 100) / 4}%)`,
              width: `${(extendedImages.length * 100) / 4}%`
            }}
          >
            {extendedImages.map((image, index) => (
              <div key={index} className="w-1/4 px-2">
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
        
        <div className="flex justify-center items-center mt-8 space-x-4">
          <span className="text-foreground font-semibold">New Agency Site</span>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;