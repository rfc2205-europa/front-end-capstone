import React from 'react';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.product) {
      if (this.props.product.features) {
        const features = this.props.product.features;
        return (
          <div className='productOverview'>
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
        );
      } else {
        return (
          <div className='productOverview'>
            <div className='descriptionBox'>
              <strong className='description'>{this.props.product.slogan}</strong>
              <p className='description'>{this.props.product.description}</p>
            </div>
          </div>
        );
      }
    }
    return (
      <div className='productOverview'>
        <div>
          <p className='description'>loading description</p>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
