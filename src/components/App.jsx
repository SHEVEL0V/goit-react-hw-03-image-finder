import React, { Component } from 'react';

import fechApi from '../services/fech';
import Container from './container/container';
import Searchbar from './Searchbar/searchbar';
import ImageGallery from './ImageGallery/imageGallery';
import Loader from './Loader/loader';
import Button from './Button/button';

const st = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const PAGE = 1;

export default class App extends Component {
  state = {
    status: st.IDLE,
    data: [],
    page: PAGE,
    total: '',
    valueInput: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, valueInput } = this.state;

    if (prevState.valueInput !== valueInput || prevState.page !== page) {
      this.renderList();
    }

    if (prevState.valueInput !== valueInput) {
      this.setState({ data: [], page: PAGE });
    }
  }

  onLoadMore = () => {
    const increment = 1;
    this.setState(preS => ({ page: preS.page + increment }));
  };

  renderList = () => {
    this.setState({ status: st.PENDING });
    const { page, valueInput } = this.state;

    fechApi(valueInput, page).then(res => {
      if (res.hits.length === 0) {
        return this.setState({ status: st.REJECTED });
      }

      const filtreData = res.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }
      );

      this.setState(preS => ({
        data: [...preS.data, ...filtreData],
        status: st.RESOLVED,
        total: res.total,
      }));
    });
  };

  onSubmit = value => {
    this.setState({ valueInput: value });
  };

  // ******** JSX ********************
  render() {
    const { status, data, total } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <div>
          {status === 'idle' && <h1>Введіть запит пошуку.</h1>}
          <ImageGallery data={data} />
          {status === 'resolved' && total !== data.length && (
            <Button onClick={this.onLoadMore} />
          )}
          {status === 'pending' && <Loader />}
          {status === 'rejected' && <h1>Результат запиту не знайдений!</h1>}
        </div>
      </Container>
    );
  }
}
