import React from 'react';
import StyleThumb from './StyleThumb.jsx';

class StyleRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.row.map(style => {
          return (
            <StyleThumb
              key={style.name + '-' + style.style_id}
              photo={style.photos[0].thumbnail_url}
              id={style.style_id}
              selectedStyle={this.props.selectedStyle}
              handleStyles={this.props.handleStyles}
              handleSelection={this.props.handleSelection}
            />
          )
        })}
      </div>
    )
  }
}
export default StyleRow;