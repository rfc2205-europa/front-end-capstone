import React from 'react';
import StyleRow from './StyleRow.jsx';
import StyleThumb from './StyleThumb.jsx';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfRows: [],
      arrayToSplice: [],
    }
  }

  createStyleRows = (styles) => {
    console.log(styles);
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
      var spliceCopy = JSON.parse(JSON.stringify(this.props.styles.results));
      this.setState({
        arrayToSplice: spliceCopy
      }, () => {
        this.createStyleRows(this.state.arrayToSplice);
      })
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
          {this.state.arrayOfRows.map(row => {
            return <StyleRow key={row[0].style_id} row={row} handleStyles={this.props.handleStyles}/>
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