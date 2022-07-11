import React from 'react';
import Gallery from './subcomponents/Gallery.jsx';

const axios = require('axios');

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    axios({
      url: 'http://localhost:3005/',
      type: 'get',
      data: {
        api: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products'
      }
    })
    return (
      <div>
        <h3>Product Overview</h3>
        <Gallery />
      </div>
    )
  }
}

export default Overview