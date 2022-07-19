import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      qty: null,
      purchaseQty: null,
    };
  }

  // size selection handler
  onSize = (e) => {
    this.setState({
      size: e.target.value,
    }, () => (this.returnSize()));
  };

  // sets qty to equal a given size's quantity
  returnSize = () => {
    const skuArray = [];
    const {skus} = this.props.style;
    for (const key in skus) {
      const skuObj = {};
      skuObj.id = key;
      skuObj.chars = skus[key];
      skuArray.push(skuObj);
    }
    if (skuArray.length <= 15) {
      console.log(skuArray);
    }
    for (let x = 0; x < skuArray.length; x++) {
      if (skuArray[x].chars.size === this.state.size) {
        this.setState({
          qty: skuArray[x].chars.quantity,
        });
      }
    }
  };

  // qty selection handler
  onQty = (e) => {
    this.setState({
      purchaseQty: e.target.value,
    });
  };

  addToCart = (e) => {
    if (this.state.size === null) {
      alert('Please select a size');
    } else {
      console.log(this.state);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // if a new style is selected
    if (this.props.style !== prevProps.style) {
      this.setState({
        size: null,
        qty: null,
        purchaseQty: null,
      });
    }
    // if size has been chosen and purchase qty has not
    if (this.state.size !== null && this.state.purchaseQty === null) {
      this.setState({
        purchaseQty: 1,
      });
    }
    // if size does not equal prior size
    if (this.state.size !== prevState.size && this.state.size !== 'Select size') {
      document.getElementsByClassName('cartSelect')[1].value = 1;
      this.setState({
        purchaseQty: 1,
      });
    }
  }

  render() {
    if (this.props.style) {
      const {skus} = this.props.style;
      const skuArray = [];
      for (const key in skus) {
        const skuObj = {};
        skuObj.id = key;
        skuObj.chars = skus[key];
        skuArray.push(skuObj);
      }
      if (this.state.qty <= 15) {
        var sizeRange = Array.from(Array(this.state.qty+1).keys());
      } else {
        var sizeRange = Array.from(Array(16).keys());
      }
      sizeRange.shift();
      if (skus.null) {
        console.log('out of stock');
        return (
          <div className="cart">
            <div className='cartOne'>
              <select className="cartSelect" onChange={this.onSize}>
                <option
                  value="Out of stock :("
                  disabled
                >Out of stock</option>
              </select>
            </div>
          </div>
        );
      } else if (!skus.null && this.state.size === null || this.state.size === 'Select size') {
        return (
          <div className="cart">
            <div className='cartOne'>
              <select className="cartSelect" onChange={this.onSize}>
                <option value={null}>Select size</option>
                {skuArray.map((sku) => {
                  return <option key={sku.id+'-'+sku.size} value={sku.chars.size}>{sku.chars.size}</option>;
                })}
              </select>
              <select className="cartSelect" onChange={this.onQty}>
                <option value='-'>-</option>
              </select>
            </div>
            <div className='cartTwo'>
              <button className="qButton" onClick={this.addToCart}>Add to Cart</button>
            </div>
          </div>
        );
      } else if (!skus.null && this.state.size) {
        return (
          <div className="cart">
            <div className='cartOne'>
              <select className="cartSelect" onChange={this.onSize}>
                <option value={null}>Select size</option>
                {skuArray.map((sku) => {
                  return <option key={sku.id+'-'+sku.size} value={sku.chars.size}>{sku.chars.size}</option>;
                })}
              </select>
              <select className="cartSelect" onChange={this.onQty}>
                {sizeRange.map((choice) => {
                  return <option key={choice} value={choice}>{choice}</option>;
                })}
              </select>
            </div>
            <div className='cartTwo'>
              <button className="qButton" onClick={this.addToCart}>Add to Cart</button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="cart">
          <div className='cartOne'>
            <p>Size</p>
            <select onChange={this.onSize}>
              <option value={null}>select a size</option>
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
      );
    }
  }
}

export default Cart;
