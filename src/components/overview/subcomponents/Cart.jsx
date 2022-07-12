import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      qty: null,
      purchaseQty: null
    }
  }

  // size selection handler
  onSize = (e) => {
    this.setState({
      size: e.target.value,
    }, () => (this.returnSize()))
  }

  // sets qty to equal a given size's quantity
  returnSize = () => {
    let skuArray = [];
    let { skus } = this.props.style
    for (var key in skus) {
      let skuObj = {};
      skuObj.id = key;
      skuObj.chars = skus[key]
      skuArray.push(skuObj)
    }
    for (var x = 0; x < skuArray.length; x++) {
      if (skuArray[x].chars.size === this.state.size) {
        this.setState({
          qty: skuArray[x].chars.quantity
        })
      }
    }
  }

  // qty selection handler
  onQty = (e) => {
    this.setState({
      purchaseQty: e.target.value,
    })
  }

  addToCart = (e) => {
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps.style)
    // console.log(this.props.style)
    if (this.props.style !== prevProps.style) {
      // console.log('change');
      this.setState({
        size: null,
        qty: null,
        purchaseQty: null,
      })
    }
  }

  render() {
    if (this.props.style) {
      let { skus } = this.props.style;
      let skuArray = [];
      for (var key in skus) {
        let skuObj = {};
        skuObj.id = key;
        skuObj.chars = skus[key]
        skuArray.push(skuObj)
      }
      let sizeRange = Array.from(Array(this.state.qty+1).keys())
      sizeRange.shift();
      return (
        <div>
          <div className='cartOne'>
            <p>Size</p>
            <select onChange={this.onSize}>
              <option value="Please select size">Please select size</option>
              {skuArray.map(sku => {
                return <option key={sku.id+'-'+sku.size} value={sku.chars.size}>{sku.chars.size}</option>
              })}
            </select>
            <p>Qty</p>
            <select onChange={this.onQty}>
              {sizeRange.map(choice => {
                return <option key={choice} value={choice}>{choice}</option>
              })}
            </select>
          </div>
          <div className='cartTwo'>
            <button onClick={this.addToCart}>Add to Cart</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='cartOne'>
            <p>Size</p>
            <select onChange={this.onSize}>
              <option value="select a size">select a size</option>
            </select>
            <p>Qty</p>
            <select onChange={this.onQty}>
              <option value="select a qty">select a qty</option>
            </select>
          </div>
          <div className='cartTwo'>
            <button>Add to Cart</button>
          </div>
        </div>
      )
    }
  }
}

export default Cart;