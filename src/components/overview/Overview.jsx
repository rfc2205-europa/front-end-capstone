import React from 'react';
import Gallery from './subcomponents/Gallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Product Overview</h3>
        <Gallery />
      </div>
    )
  }
}

export default Overview