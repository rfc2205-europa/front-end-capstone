import React from 'react';

import SearchResults from './SearchResults.jsx'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      entry: '',
      searchedProducts: [],
    }
  }

  enterSearch = (e) => {
    this.setState({
      entry: e.target.value,
    })
  }

  onClick = (e) => {
    console.log(this.props.products)
    var results = [];
    this.props.products.map((product) => {
      if (product.name.includes(this.state.entry)) {
        results.push(product);
      }
    })
    this.setState({
      searchedProducts: results
    })
    this.props.toggle();
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
            <button onClick={this.onClick}>Search</button>
            <input type="text" placeholder="search bar" onChange={this.enterSearch}/>
          </div>
        </div>
      )
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
              <input type="text" placeholder="search bar" />
            </div>
          </div>
          <SearchResults results={this.state.searchedProducts} select={this.props.select}/>
        </div>
      )
    }
  }
}

export default SearchBar