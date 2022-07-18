// package imports
import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
const axios = require('axios');
// import { inspect } from 'util';

// component imports

import SearchBar from './components/search/SearchBar.jsx'
import Overview from './components/overview/Overview.jsx'
import Review from './components/reviews/Review.jsx'
import QandA from './components/QuestionsAndAnswers/QandA.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id : null,
      searching: false,
      search_products: []
    }
    this.trackClicks = this.trackClicks.bind(this);
  }

  getInitialProduct = () => {
    var id;
    var data = JSON.stringify({
      "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products?count=1"
    });
    var config = {
      method: 'post',
      url: 'http://localhost:3005/retrieve',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
        .then((response) => {
          id = response.data[0].id
          console.log('selected id:', id);
          this.setState({
            product_id: id,
            search_products: response.data,
          })
        })
        .catch(err => {
          console.log('err:', err)
        })
  }

  getSearchResults = () => {
    var id;
    var data = JSON.stringify({
      "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products?count=1000"
    });
    var config = {
      method: 'post',
      url: 'http://localhost:3005/retrieve',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
        .then((response) => {
          id = response.data[0].id
          console.log('selected id:', id);
          this.setState({
            search_products: response.data,
          })
        })
        .catch(err => {
          console.log('err:', err)
        })
  }

  trackClicks = (e) => {
    // console.log(e)
    // const getCircularReplacer = () => {
    //   const seen = new WeakSet();
    //   return (key, value) => {
    //     if (typeof value === "object" && value !== null) {
    //       if (seen.has(value)) {
    //         return;
    //       }
    //       seen.add(value);
    //     }
    //     return value;
    //   };
    // };
    // e = JSON.stringify(e, getCircularReplacer());
    var data = {
      "type": "click",
      "clickEvent": {
        "clientX": e.clientX,
        "clientY": e.clientY,
        "pageX": e.pageX,
        "pageY": e.pageY,
        "element": e.target.outerHTML,
      }
    };
    if (e.target.value) {
      data.clickEvent.clientChosenValue = e.target.value
    }
    var config = {
      method: 'post',
      url: 'http://localhost:3005/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
        // .then(res => {
        //   console.log(res.data)
        // })
        .catch(err => {
          console.log('click handling error:', err)
        })
  }

  populateSearch = () => {
    var products = this.state.search_products;
    var prod_objs = []
    products.map((product, x) => {
      var obj = {
        "name": product.name,
        "id": product.id,
        "category": product.category,
        "slogan": product.slogan,
        "description": product.description,
        "default_price": product.default_price
      };
      prod_objs.push(obj);
    })
    this.setState({
      search_products: prod_objs
    })
  }

  toggleSearch = (e) => {
    if (this.state.searching) {
      this.setState({
        searching: false,
      })
    } else {
      this.setState({
        searching: true,
      })
    }
  }

  displaySearch = e => {
    this.setState({
      product_id: e.target.id,
      searching: false,
    })
  }

  componentDidMount() {
    this.getInitialProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search_products.length !== this.state.search_products.length) {
      this.populateSearch()
    }
  }

  render() {
    if (!this.state.searching) {
      return (
        <div onClick={this.trackClicks}>
          <SearchBar
            toggle={this.toggleSearch}
            products={this.state.search_products}
            searching={this.state.searching}
            getSearchResults={this.getSearchResults}
          />
          <Overview product_id={this.state.product_id}/>
          <QandA />
          <Review/>
        </div>
      )
    } else {
      return (
      <div onClick={this.trackClicks}>
        <SearchBar
          toggle={this.toggleSearch}
          products={this.state.search_products}
          searching={this.state.searching}
          select={this.displaySearch}
        />
      </div>
      )
    }
  }
}

root.render(<App />);
