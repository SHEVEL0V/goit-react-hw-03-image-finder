import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import s from './ImageGalery.module.css';

export default function ImageGallery({ data }) {
  return (
    <ul className={s.galery}>
      {data.map(el => (
        <ImageGalleryItem
          key={el.id}
          webformatURL={el.webformatURL}
          largeImageURL={el.largeImageURL}
          tags={el.tags}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
};
