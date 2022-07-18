import React from 'react';

import Result from './Result.jsx'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.results.length > 0) {
      return (
        <div>
          {this.props.results.map(result => {
            return <div className="result" id={result.id} onClick={this.props.select}>{result.name}</div>
          })}
        </div>
      )
    } else {
      return (
        <div>Try searching for a different product name.</div>
      )
    }
  }
}

export default SearchResults;