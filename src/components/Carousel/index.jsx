import './Carousel.css';
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';
import { Frame } from '../Frame';

const images = [
  {
    original: 'img/Carousel_1.png',
    thumbnail: 'img/Carousel_1.png',
    title: 'La Veggie',
    imageDescription: 'Une nouvelle offre végétarienne.',
    backgroundColor: 'orange',
  },
  {
    original: 'img/Carousel_2.png',
    thumbnail: 'img/Carousel_2.png',
    title: 'Payez par carte',
    imageDescription: 'Payez facilement et en toute sécurité.',
    backgroundColor: 'green',
  },
  {
    original: 'img/Carousel_3.png',
    thumbnail: 'img/Carousel_3.png',
    title: 'Des prix fondent',
    imageDescription: 'Pizza 4 fromages à seulement 10€.',
    backgroundColor: 'red',
  },
  {
    original: 'img/Carousel_4.png',
    thumbnail: 'img/Carousel_4.png',
    title: 'Offre limitée',
    imageDescription: "2 pizzas pour le prix d'une",
    backgroundColor: 'green',
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = index => {
    setCurrentIndex(index);
  };

  console.log(currentIndex);
  return (
    <>
      <ImageGallery
        className="carousel"
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        autoPlay={false}
        showNav={true}
        showBullets={true}
        onSlide={index => handleSlide(index)}
      />
      <div>
        <span class="title-carousel">{images[currentIndex].title}</span>
        <Frame bottom backgroundColor={images[currentIndex].backgroundColor}>
          {images[currentIndex].imageDescription}
        </Frame>
      </div>
    </>
  );
};
