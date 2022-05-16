import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import s from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    const text = e.currentTarget.value;
    this.setState({
      value: text,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    if (value.trim() !== '') {
      this.props.onSubmit(value);
      this.resetInput();
    }
  };

  resetInput = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.onSubmit}>
          <button type="submit" className={s.button}>
            <FiSearch />
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
