import React from 'react';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.product) {
      return (
        <div className='productOverview'>
          <div>
            <p className='description'>{this.props.product.description}</p>
          </div>
        </div>
      )
    }
    return (
      <div className='productOverview'>
        <div>
          <p className='description'>loading description</p>
        </div>
      </div>
    )
  }
}

export default ProductOverview;