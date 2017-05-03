import React from 'react';
import { Link } from 'react-router';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-result-item">
        <Link to={`/profile/${this.props.res.id}`}>
          <img src={this.props.res.profile_url}/>
          <p>{`${this.props.res.fname} ${this.props.res.lname}`}</p>
        </Link>
      </div>
    );
  }
}


export default SearchResultItem;
