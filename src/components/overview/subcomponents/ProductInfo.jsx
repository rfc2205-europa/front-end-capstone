import React from 'react';
import Styles from './Styles.jsx'
import Cart from './Cart.jsx'

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.product && this.props.selectedStyle) {
      if (this.props.selectedStyle.sale_price) {
        return (
          <div className='productInfo'>
            <div className='info'>
              <p>Rating Placeholder</p>
              <p>{this.props.product.category}</p>
              <p>{this.props.product.name} - {this.props.selectedStyle.name}</p>
              <strike style={{color: 'red'}}>${this.props.selectedStyle.original_price}</strike>
              <p>${this.props.selectedStyle.sale_price}</p>
            </div>
            <div className='styles'>
              <Styles
                styles={this.props.styles}
                handleStyles={this.props.handleStyles}
              />
            </div>
            <Cart style = {this.props.selectedStyle}/>
          </div>
        )
      } else {
        return (
          <div className='productInfo'>
            <div className='info'>
              <p>Rating Placeholder</p>
              <p>{this.props.product.category}</p>
              <p>{this.props.product.name} - {this.props.selectedStyle.name}</p>
              <p>${this.props.selectedStyle.original_price}</p>
            </div>
            <div className='styles'>
              <Styles
                styles={this.props.styles}
                handleStyles={this.props.handleStyles}
              />
            </div>
            <Cart style = {this.props.selectedStyle}/>
          </div>
        )
      }
    } else {
      return (
        <div className='productInfo'>
          <div>
            <h3></h3>
          </div>
        </div>
      )
    }

  }
}

export default ProductInfo;