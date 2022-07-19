import React from 'react';
import Styles from './Styles.jsx';
import Cart from './Cart.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.product && this.props.selectedStyle) {
      const features = this.props.product.features;
      if (this.props.selectedStyle.sale_price) {
        return (
          <div className='productInfo'>
            <div className='info'>
              <p>Rating Placeholder</p>
              <p className="infoCategory">{this.props.product.category}</p>
              <p className="infoName">{this.props.product.name}</p>
              <strike className="infoOldPrice">${this.props.selectedStyle.original_price}</strike>
              <p className="infoNewPrice">${this.props.selectedStyle.sale_price}</p>
            </div>
            <div className="features">
              <div className='descriptionBox'>
                <strong className='description' style={{display: 'flex', justifyContent: 'center'}}>{this.props.product.slogan}</strong>
                <p className='description'>{this.props.product.description}</p>
              </div>
              <ul className="featureList">
                {features.map((key) => {
                  return <li key={key.feature}>{key.feature} - {key.value}</li>;
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
              <p>Rating Placeholder</p>
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
              <ul className="featureList">
                {features.map((key) => {
                  return <li key={key.feature}>{key.feature} - {key.value}</li>;
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
