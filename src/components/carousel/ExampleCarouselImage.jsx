
import styles from './Carousel.module.css'
import React from 'react';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ src, alt }) => {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
    />
  );
};

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};


  

  export default ExampleCarouselImage;