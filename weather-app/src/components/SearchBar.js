import React from "react";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputchange(e){
    this.props.inputChange(e);
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.formSubmited();
  }

  render() {
    const location = this.props.searchValue;

    return (
      <div className="search-bar">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <button className="search-form__btn" type="submit">Search</button>
          <input
            className="search-form__input"
            type="text"
            id="searchBox"
            name="searchBox"
            value={location}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;