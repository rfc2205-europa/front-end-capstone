import React from 'react';

import SearchResults from './SearchResults.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      entry: '',
      searchedProducts: [],
    };
  }

  enterSearch = (e) => {
    this.setState({
      entry: e.target.value,
    });
  };

  sentenceCase = (name) => {
    let casedName = '';
    name = name.split('');
    for (let x = 0; x < name.length; x++) {
      if (name[x-1] === undefined || name[x-1] === ' ') {
        casedName += name[x].toUpperCase();
      } else {
        casedName += name[x];
      }
    }
    console.log(casedName);
    return casedName;
  };

  populateResults = (e) => {
    this.props.getSearchResults();
  };

  onClick = (e) => {
    // console.log(this.props.products)
    const results = [];
    const entry = this.sentenceCase(this.state.entry);
    this.props.products.map((product) => {
      if (product.name.includes(entry)) {
        results.push(product);
      }
    });
    this.setState({
      searchedProducts: results,
    });
    this.props.toggle();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.searching === true) {
      return {entry: ''};
    } else {
      return null;
    }
  }

  render() {
    if (!this.props.searching) {
      return (
        <div
          className="searchBar"
          style={{display: 'flex', width: '100%', justifyContent: 'space-between', border: '1px solid black'}}
        >
          <h3>The Future of Online Retail</h3>
          <div>
            <button className="qButton" onClick={this.onClick}>Search</button>
            <input className="qMSearch" type="text" placeholder="europa" onChange={this.enterSearch} onClick={this.populateResults}/>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div
            className="searchBar"
            style={{display: 'flex', width: '100%', justifyContent: 'space-between', border: '1px solid black'}}
          >
            <h3>The Future of Online Retail</h3>
            <div>
              <button onClick={this.props.toggle}>Go Back</button>
              <input type="text" placeholder="europa" />
            </div>
          </div>
          <SearchResults results={this.state.searchedProducts} select={this.props.select}/>
        </div>
      );
    }
  }
}

export default SearchBar;
