import React, { Component } from "react";
import s from "./searchbar.module.css";

class Searchbar extends Component {
  state = {
    value: "",
  };

  onChange = (e) => {
    const text = e.currentTarget.value;
    this.setState({
      value: text,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className={s.button}>
            <span className="button-label">Search</span>
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
