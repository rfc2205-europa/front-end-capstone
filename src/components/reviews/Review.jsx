import React from 'react';
import Rating from './Rating.jsx';
import ReviewComponent from './ReviewComponent.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'review'>
        <h3>Product Review</h3>
        <Rating/>
        <ReviewComponent/>
      </div>
    )
  }
}

export default Review;
