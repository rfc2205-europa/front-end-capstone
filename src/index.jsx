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
    this.trackClicks = this.trackClicks.bind(this);
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

  render() {
    return (
      <div onClick={this.trackClicks}>
        {/* <h1>Hello World</h1> */}
        <Overview />
        {/* <QandA />
        <Review/> */}
      </div>
    )
  }
}

root.render(<App />);
