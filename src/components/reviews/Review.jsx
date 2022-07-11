import React from 'react';
import axios from 'axios';
import RatingComponent from './RatingComponent.jsx';
import ReviewComponent from './ReviewComponent.jsx';

const service = axios.create({
  baseURL: 'http://127.0.0.1:3005',
  changeOrigin: true,
})

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMethod: 'helpful',
      ratings: [],
      reviews: [],
    }
    this.fetchRatingData = this.fetchRatingData.bind(this);
    this.fetchReviewData = this.fetchReviewData.bind(this);
    this.changeSortMethod = this.changeSortMethod.bind(this);
  }

  changeSortMethod(method) {
    this.setState({
      sortMethod: method
    })
    this.fetchReviewData()
  }

  componentDidMount() {
    this.fetchReviewData();
    this.fetchRatingData();
  }

  fetchRatingData() {
    var product_id = '66666';
    var body = {api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${product_id}`}
    service.post('/retrieve', body)
     .then((res) => {
       this.setState({
         ratings: res.data
       })
     })
     .catch((err) => {
      console.log('there is err in fetching review data!', err)
    })
  }

  fetchReviewData() {
    console.log('fetch!')
    var product_id = '66666';
    var body = {api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=${product_id}&sort=${this.state.sortMethod}`}
    service.post('/retrieve', body)
     .then((res) => {
      this.setState({
        reviews: res.data.results
      })
      console.log('review data from the first scratch', res.data.results);
     })
     .catch((err) => {
       console.log('there is err in fetching review data!', err)
     })
  }


  render() {
    return (
      <div className = 'review'>
        <h3>Product Review</h3>
        <div>{this.state.sortMethod}</div>
        <RatingComponent ratings={this.state.ratings}/>
        <ReviewComponent reviews={this.state.reviews} sortFunc = {this.changeSortMethod}/>
      </div>
    )
  }
}

export default Review;
