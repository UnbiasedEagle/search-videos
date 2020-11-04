import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state.term);
  };

  render() {
    return (
      <nav className='red'>
        <div className='nav-wrapper'>
          <form onSubmit={this.onFormSubmit}>
            <div className='input-field'>
              <input
                value={this.state.term}
                onChange={this.onInputChange}
                id='search'
                type='search'
              />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
