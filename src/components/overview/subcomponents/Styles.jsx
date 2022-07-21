import React from 'react';
import StyleRow from './StyleRow.jsx';
import StyleThumb from './StyleThumb.jsx';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfRows: [],
      arrayToSplice: [],
    };
  }

  createStyleRows = (styles) => {
    const productId = this.props.styles.product_id;
    const arrayOfRows = [];
    let row = [];
    for (let x = 0; x < styles.length; x++) {
      const spliced = styles.splice(0, 1);
      row.push(spliced[0]);
      x--;
      if (row.length === 4 || styles.length === 0) {
        arrayOfRows.push(row);
        row = [];
      }
    }
    // console.log('array of style arrays:', arrayOfRows)
    this.setState({
      arrayOfRows: arrayOfRows,
    });
  };

  renderCheckmark = (thumbnail) => {
    if (thumbnail === this.props.selectedStyle.style_id) {
      return true;
    } else {
      return false;
    }
  };

  componentDidMount(prevProps) {
    if (this.props.styles.results) {
      const spliceCopy = JSON.parse(JSON.stringify(this.props.styles.results));
      this.setState({
        arrayToSplice: spliceCopy,
      }, () => {
        this.createStyleRows(this.state.arrayToSplice);
      });
    }
  }

  render() {
    if (this.props.styles.results) {
      return (
        <div>
          <div className="styleHeader">
            <strong>Style ></strong> <span style={{'fontStyle': 'italic'}}>{this.props.selectedStyle.name}</span>
          </div>
          <div className="styleGrid">
            {this.state.arrayOfRows.map((row) => {
              return (
                <StyleRow
                  key={row[0].style_id}
                  row={row}
                  selectedStyle={this.props.selectedStyle.style_id}
                  handleStyles={this.props.handleStyles}
                  handleSelection={this.renderCheckmark}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            Style Selector
          </div>
          <div>

          </div>
        </div>
      );
    }
  }
}

export default Styles;
