// package imports
import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
const axios = require('axios');
// import { inspect } from 'util';

// component imports

import Overview from './components/overview/Overview.jsx'
import Review from './components/reviews/Review.jsx'
import QandA from './components/QuestionsAndAnswers/QandA.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id : null,
    }
    this.trackClicks = this.trackClicks.bind(this);
  }

  getInitialProduct = () => {
    var id;
    var data = JSON.stringify({
      "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products?count=25"
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
  componentDidMount() {
    this.getInitialProduct();
  }

  render() {
    return (
      <div onClick={this.trackClicks}>
        {/* <h1>Hello World</h1> */}
        <Overview product_id={this.state.product_id}/>
        {/* <QandA /> */}
        {/* <Review/> */}
      </div>
    )
  }
}

root.render(<App />);
