import './Carousel.css';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'img/Slide_1.jpg',
    thumbnail: 'img/Slide_1.jpg',
    title: 'la veggie',
    descriptionImage: 'Une nouvelle offre végétarienne.',
  },
  {
    original: 'img/Slide_2.jpg',
    thumbnail: 'img/Slide_2.jpg',
  },
  {
    original: 'img/Slide_3.jpg',
    thumbnail: 'img/Slide_3.jpg',
  },
  {
    original: 'img/Slide_4.jpg',
    thumbnail: 'img/Slide_4.jpg',
  },
];

export const Carousel = () => {
  // Use state to keep track of the active index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Event handler for updating the active index
  const handleSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <ImageGallery
        className="carousel"
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        autoPlay={false}
        onSlide={index => handleSlide(index)}
      />
      {currentIndex === 0 && images.length > 0 && (
        <div>
          <span class="title">{images[0].title}</span>
          <span class="description">{images[0].descriptionImage}</span>
        </div>
      )}
    </div>
  );
};
