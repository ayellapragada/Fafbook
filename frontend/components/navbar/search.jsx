import React from 'react';
import { connect } from 'react-redux';
import {getSearchResults} from '../../actions/search_actions';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", results: this.props.results};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({query: e.currentTarget.value});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.getSearchResults(this.state.query);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render() {
    return(
      <div className="search">
        <form onSubmit={this.handleSubmit} className="search-box">
          <input type="text"
            value={this.state.query}
            onChange={this.update}
            onClick={this.toggleShowResults}
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



const mapStateToProps = (state) => ({
  results: state.search
});

const mapDispatchToProps = dispatch => ({
  getSearchResults: (query) => (dispatch(getSearchResults(query)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

