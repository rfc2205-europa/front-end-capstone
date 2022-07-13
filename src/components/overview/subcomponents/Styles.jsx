import React from 'react';
import StyleThumb from './StyleThumb.jsx'

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfRows: []
    }
  }

  createStyleRows = (styles) => {
    var styles = this.props.styles.results;
    var productId = this.props.styles.product_id;
    var arrayOfRows = [];
    var row = [];
    for (var x = 0; x < styles.length; x++) {
      var spliced = styles.splice(0, 1);
      row.push(spliced[0]);
      x--;
      if (row.length === 4 || styles.length === 0) {
        arrayOfRows.push(row)
        row = [];
      }
    }
    console.log('final array:', arrayOfRows)
    this.setState({
      arrayOfRows: arrayOfRows
    })
  }

  componentDidMount(prevProps) {
    if (this.props.styles.results) {
      this.createStyleRows(this.props.styles.results);
    }
  }

  render() {
    if (this.props.styles.results) {
      return (
        <div>
        <div>
          <strong>Style</strong> > {this.props.selectedStyle.name}
        </div>
        <div style={{display: 'flex', justifyContent:'space-around', flexWrap: 'wrap'}}>
        {this.props.styles.results.map(style => {
          return (
            <StyleThumb
              key={style.name + '-' + style.style_id}
              photo={style.photos[0].thumbnail_url}
              id={style.style_id}
              handleStyles={this.props.handleStyles}
            />
          )
        })}
        </div>
      </div>
      )
    } else {
      return (
        <div>
          <div>
            Style Selector
          </div>
          <div>

          </div>
        </div>
      )
    }
  }
}

export default Styles;