import React from 'react';
import axios from 'axios';
import RatingComponent from './RatingComponent.jsx';
import ReviewComponent from './ReviewComponent.jsx';
import ReactDom from 'react-dom';
const service = axios.create({
  baseURL: 'http://127.0.0.1:3005',
  changeOrigin: true,
})

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMethod: 'relevant',
      // modelView: false,
      ratings: [],
      reviews: [],
    }
    this.fetchRatingData = this.fetchRatingData.bind(this);
    this.fetchReviewData = this.fetchReviewData.bind(this);
    this.changeSortMethod = this.changeSortMethod.bind(this);
    // this.changeModelView = this.changeModelView.bind(this);
  }

  // changeModelView() {
  //   this.setState({
  //     modelView: !this.state.modelView
  //   })
  // }

  changeSortMethod(method) {
    this.setState({
      sortMethod: method
    })
    this.fetchReviewData(method)
  }

  componentDidMount() {
    this.fetchReviewData();
    this.fetchRatingData();
  }

  fetchRatingData() {
    var product_id = '66663';
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

  fetchReviewData(sort = 'relevant') {
    var product_id = '66666';
    var body = {api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=${product_id}&sort=${sort}`}
    console.log(body.api, this.state.sortMethod)
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
      <div className = {this.state.modelView? 'review modelView':'review'}>
        <h3>Product Review</h3>
        <RatingComponent ratings={this.state.ratings}/>
        <ReviewComponent reviews={this.state.reviews} sortFunc = {this.changeSortMethod}/>
        {/* <ReviewComponent reviews={this.state.reviews} sortFunc = {this.changeSortMethod} modelFunc = {this.changeModelView}/> */}
      </div>
    )
  }
}

export default Review;
