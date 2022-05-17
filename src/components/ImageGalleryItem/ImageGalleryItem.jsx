import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './imageGalegyItems.module.css';
import Modal from '../Modal/modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModat: false,
  };

  onModal = () => {
    this.setState(preS => {
      return { showModat: !preS.showModat };
    });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <li onClick={this.onModal} className={s.item}>
          <img className={s.img} src={webformatURL} alt={tags} />
        </li>

        {this.state.showModat && (
          <Modal onClose={this.onModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
