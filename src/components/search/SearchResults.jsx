import React from 'react';

import Result from './Result.jsx';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.results.length > 0) {
      return (
        <div className="resultsPage">
          {this.props.results.map((result) => {
            return <Result select={this.props.select} result={result} key={result.id}/>;
          })}
        </div>
      );
    } else {
      return (
        <div>Try searching for a different product name.</div>
      );
    }
  }
}

export default SearchResults;
