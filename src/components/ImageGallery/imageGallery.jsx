import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ImageGalery.module.css';
import Loader from '../Loader/loader';
import Button from '../Button/button';
import fechApi from '../fech/fech';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const st = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const PAGE = 1;

export default class ImageGallery extends Component {
  state = {
    status: st.IDLE,
    urlList: [],
    page: PAGE,
    total: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.props;
    const { page } = this.state;

    if (prevProps.value !== value || prevState.page !== page) {
      this.renderList();
    }

    if (prevProps.value !== value) {
      this.setState({ urlList: [], page: PAGE });
    }
  }

  onLoadMore = () => {
    const increment = 1;
    this.setState(preS => ({ page: preS.page + increment }));
  };

  renderList = () => {
    this.setState({ status: st.PENDING });
    const { page } = this.state;
    const { value } = this.props;

    fechApi(value, page).then(res => {
      this.setState(preS => ({ urlList: [...preS.urlList, ...res.hits] }));
      this.setState({ status: st.RESOLVED });
      this.setState({ total: res.total });
      if (res.hits.length === 0) {
        this.setState({ status: st.REJECTED });
      }
    });
  };

  // ******** JSX ********************
  render() {
    const { status, urlList, total } = this.state;
    return (
      <div>
        {status === 'idle' && <h1>Введіть запит пошуку.</h1>}

        <ul className={s.galery}>
          {urlList.map(el => (
            <ImageGalleryItem
              key={el.id}
              webformatURL={el.webformatURL}
              largeImageURL={el.largeImageURL}
              tags={el.tags}
            />
          ))}
        </ul>

        {status === 'resolved' && total !== urlList.length && <Button onClick={this.onLoadMore} />}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>Результат запиту не знайдений!</h1>}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
