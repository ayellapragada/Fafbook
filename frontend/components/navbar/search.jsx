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
          <input type="submit"
            className="search-submit"
            value="Search!"/>
        </form>

      </div>
    );

  }
}


export default Search;
