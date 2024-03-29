import React from 'react';
import Gallery from './subcomponents/Gallery.jsx';
import ExpandedGallery from './subcomponents/ExpandedGallery.jsx';
import GalleryOverlay from './subcomponents/GalleryOverlay.jsx';
import ProductInfo from './subcomponents/ProductInfo.jsx';
import ProductOverview from './subcomponents/ProductOverview.jsx';

const axios = require('axios');
const cf = require('../../../config.js');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null,
      product: null,
      styles: [],
      selectedStyle: null,
      expanded: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.selectStyle = this.selectStyle.bind(this);
  }

  fetchData() {
    if (this.state.product_id) {
      const id = this.state.product_id;
      let data = JSON.stringify({'api': `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${id}`});
      const config = {
        method: 'post',
        url: `${cf.ip}/retrieve`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      axios(config)
          .then((response) => {
            this.setState({
              product: response.data,
            });
            data = JSON.stringify({'api': `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${id}/styles`});
            config.data = data;
            axios(config)
                .then((response) => {
                  // console.log(response.data)
                  this.setState({
                    styles: response.data,
                  });
                  // selects default style out of results
                  response.data.results.forEach((result) => {
                    if (result['default?'] === true) {
                      this.setState({
                        selectedStyle: result,
                      });
                    }
                  });
                  if (this.state.selectedStyle === null) {
                    this.setState({
                      selectedStyle: response.data.results[0],
                    });
                  }
                });
          })
          .catch(function(error) {
            console.log(error);
          });
    } else {
      console.log('no default product id');
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.product_id !== prevState.product_id) {
      return {product_id: nextProps.product_id};
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.product_id !== this.props.product_id) {
      this.fetchData();
    }
  }

  selectStyle = (e) => {
    const newStyle = null;
    const id = Number(e);
    console.log(id);
    for (let x = 0; x < this.state.styles.results.length; x++) {
      const style = this.state.styles.results[x];
      if (id === style.style_id) {
        this.setState({
          selectedStyle: style,
        });
      }
    }
  };

  expand = (e) => {
    console.log('expand');
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    const {product, styles} = this.state;
    if (this.state.product_id) {
      if (this.state.selectedStyle) {
        const {photos} = this.state.selectedStyle;
        if (this.state.expanded) {
          return (
            <div >
              <div className='topRow'>
                <Gallery
                  photos={photos}
                  style={this.state.selectedStyle.style_id}
                  expanded={this.state.expanded}
                  expandedView={this.expand}
                />
              </div>
            </div>
          );
        }
        return (
          <div >
            <div className='topRow'>
              <Gallery
                photos={photos}
                style={this.state.selectedStyle.style_id}
                expanded={this.state.expanded}
                expandedView={this.expand}
              />
              <ProductInfo
                product={product}
                styles={styles}
                selectedStyle={this.state.selectedStyle}
                handleStyles={this.selectStyle}
              />
            </div>
            {/* <div className='bottomRow'>
              <ProductOverview product={product}/>
            </div> */}
          </div>
        );
      }
    } else {
      return (
        <div className="overview">
          <div className='topRow'>
            <Gallery />
            <ProductInfo product={product} styles={styles} selectedStyle={this.state.selectedStyle}/>
          </div>
          {/* <div className='bottomRow'>
            <ProductOverview />
          </div> */}
        </div>
      );
    }
  }
}

export default Overview;
