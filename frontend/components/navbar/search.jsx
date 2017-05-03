import React from 'react';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';

import {getSearchResults} from '../../actions/search_actions';
import SearchDropDown from './search_dropdown';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", results: this.props.results, show: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.toggleShowResults = this.toggleShowResults.bind(this);
  }

  update(e) {
    this.setState({query: e.currentTarget.value});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.getSearchResults(this.state.query);
    }
  }

  toggleShowResults() {
    this.setState({show: true});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClickOutside() {
    this.setState({show: false});
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
        {this.state.show && <SearchDropDown results={this.props.results}/>}
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

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(onClickOutside(Search));

