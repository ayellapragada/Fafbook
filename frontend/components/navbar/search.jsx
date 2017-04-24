import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {query: ""};
  }

  render() {
    return(
      <div className="search">
        <form onSubmit={this.handleSubmit} className="search-box">
          <input type="text"
            value={this.state.query}
            onChange={this.update}
            className="search-box-input"
            placeholder="Search Fafbook"/>
          <button type="submit"
            className="search-submit">
            <i className="fa fa-search" aria-hidden="true"></i>

        </button>
        </form>

      </div>
    );

  }
}


export default Search;
