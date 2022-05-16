import React, { Component } from 'react';
import Container from './container/container';
import Searchbar from './Searchbar/searchbar';
import ImageGallery from './ImageGallery/imageGallery';

class App extends Component {
  state = {
    valueInput: '',
  };

  onSubmit = value => {
    this.setState({ valueInput: value });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery value={this.state.valueInput} />
      </Container>
    );
  }
}

export default App;
