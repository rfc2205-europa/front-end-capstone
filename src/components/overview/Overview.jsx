import React from 'react';
import Gallery from './subcomponents/Gallery.jsx';
import ProductInfo from './subcomponents/ProductInfo.jsx';
import ProductOverview from './subcomponents/ProductOverview.jsx';

const axios = require('axios');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      styles: [],
      selectedStyle: null,
    }
    this.fetchData = this.fetchData.bind(this);
    this.selectStyle = this.selectStyle.bind(this);
  }

  fetchData() {
    var id = null || 66646;
    var data = JSON.stringify({
      "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products"
    });
    var config = {
      method: 'post',
      url: 'http://localhost:3005/retrieve?count=25',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then((response) => {
      id = response.data[0].id
      console.log('selected id:', id);
    })
    // specific product
        .then(() => {
          data = JSON.stringify({"api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${id}`})
          config.data = data;
          axios(config)
              .then(response => {
                this.setState({
                  product: response.data
                })
                data = JSON.stringify({"api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${id}/styles`})
                config.data = data;
                axios(config)
                    .then(response => {
                      console.log(response.data)
                      this.setState({
                        styles: response.data,
                      })
                      // selects default style out of results
                      response.data.results.forEach((result) => {
                        if (result['default?'] === true) {
                          this.setState({
                            selectedStyle: result,
                          })
                        }
                      })
                    })
          })
          .catch(function (error) {
            console.log(error);
          });
        })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  selectStyle = (e) => {
    var newStyle = null;
    var id = Number(e);
    console.log(id);
    for(var x = 0; x < this.state.styles.results.length; x++) {
      var style = this.state.styles.results[x]
      if (id === style.style_id) {
        this.setState({
          selectedStyle: style,
        })
      }
    }
  }

  render() {
    let { product, styles } = this.state;
    if (this.state.selectedStyle) {
      let { photos } = this.state.selectedStyle;
      return (
        <div>
          <div className='topRow'>
            <Gallery photos={photos}/>
            <ProductInfo
              product={product}
              styles={styles}
              selectedStyle={this.state.selectedStyle}
              handleStyles={this.selectStyle}
            />
          </div>
          <div className='bottomRow'>
            <ProductOverview product={product}/>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='topRow'>
            <Gallery />
            <ProductInfo product={product} styles={styles} selectedStyle={this.state.selectedStyle}/>
          </div>
          <div className='bottomRow'>
            <ProductOverview />
          </div>
        </div>
      )
    }
  }
}

export default Overview