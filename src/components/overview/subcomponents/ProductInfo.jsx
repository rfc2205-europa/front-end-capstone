import React from 'react';
import AverageStar from '../../reviews/rating/AverageStar.jsx';
import Styles from './Styles.jsx';
import Cart from './Cart.jsx';
const axios = require('axios');
const service = axios.create({
  baseURL: 'http://127.0.0.1:3005',
  changeOrigin: true,
});

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: null,
      avgScore: null,
    };
  }

  fetchRatingData = () => {
    const product_id = this.props.product.id;
    const body = {api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${product_id}`};
    service.post('/retrieve', body)
        .then((res) => {
          // console.log('rating data', res.data);
          this.setState({
            ratings: res.data.ratings,
          }, () => {
            const totalScores = this.state.ratings;
            let sum = 0;
            let count = 0;
            for (const key in totalScores) {
              count+=Number(totalScores[key]);
              const times = 0;
              while (times < totalScores[key]) {
                console.log(key, sum);
                sum+=Number(key);
                times++;
              }
              console.log(count, sum / count);
            }
            this.setState({
              avgScore: sum / count,
            });
          });
        })
        .catch((err) => {
          console.log('there is err in fetching rating data!', err);
        });
  };

  componentDidMount() {
    if (this.state.ratings === null) {
      this.fetchRatingData();
    }
  }

  render() {
    if (this.props.product && this.props.selectedStyle) {
      const features = this.props.product.features;
      if (this.props.selectedStyle.sale_price) {
        return (
          <div className='productInfo'>
            <div className='info'>
              <div className='infoRating'>
                <AverageStar aveScore={this.state.avgScore} showScore={false}/>
                <a href='#review' className="reviewLink">Read all Reviews</a>
              </div>
              <p className="infoCategory">{this.props.product.category}</p>
              <p className="infoName">{this.props.product.name}</p>
              <strike className="infoOldPrice">${this.props.selectedStyle.original_price}</strike>
              <p className="infoNewPrice">${this.props.selectedStyle.sale_price}</p>
            </div>
            <div className="features">
              <div className='descriptionBox'>
                <strong className='descriptionTitle' style={{display: 'flex', justifyContent: 'center'}}>{this.props.product.slogan}</strong>
                <p className='description'>{this.props.product.description}</p>
              </div>
              <p className="featureHeading">Features:</p>
              <ul className="featureList">
                {features.map((key) => {
                  return <p key={key.feature}>
                    <span className="featureCheck">&#10003;</span> {key.feature} - {key.value}
                  </p>;
                })}
              </ul>
            </div>
            <div className='styles'>
              <Styles
                styles={this.props.styles}
                selectedStyle={this.props.selectedStyle}
                handleStyles={this.props.handleStyles}
              />
            </div>
            <Cart style = {this.props.selectedStyle}/>
          </div>
        );
      } else {
        return (
          <div className='productInfo'>
            <div className='info'>
              <div className='infoRating'>
                <AverageStar aveScore={this.state.avgScore} showScore={false}/>
                <a href='#review' className="reviewLink">Read all Reviews</a>
              </div>
              <p className="infoCategory">{this.props.product.category}</p>
              <p className="infoName">{this.props.product.name}</p>
              <p className="infoPrice">${this.props.selectedStyle.original_price}</p>
              <br />
            </div>
            <div className="features">
              <div className='descriptionBox'>
                <strong className='descriptionTitle' style={{display: 'flex', justifyContent: 'center'}}>{this.props.product.slogan}</strong>
                <p className='description'>{this.props.product.description}</p>
              </div>
              <p className="featureHeading">Features:</p>
              <ul className="featureList">
                {features.map((key) => {
                  return <p key={key.feature}>
                    <span className="featureCheck">&#10003;</span> {key.feature} - {key.value}
                  </p>;
                })}
              </ul>
            </div>
            <div className='styles'>
              <Styles
                styles={this.props.styles}
                selectedStyle={this.props.selectedStyle}
                handleStyles={this.props.handleStyles}
              />
            </div>
            <Cart style = {this.props.selectedStyle}/>
          </div>
        );
      }
    } else {
      return (
        <div className='productInfo'>
          <div>
            <h3></h3>
          </div>
        </div>
      );
    }
  }
}

export default ProductInfo;
