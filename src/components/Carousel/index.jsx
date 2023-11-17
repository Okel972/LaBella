import './Carousel.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'img/veggie.png',
    thumbnail: 'img/veggie.png',
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
  return (
    <ImageGallery
      className="carousel"
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      autoPlay={false}
      showNav={false}
      showBullets={true}
    />
  );
};
