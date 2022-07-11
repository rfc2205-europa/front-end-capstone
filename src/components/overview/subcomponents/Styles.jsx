import React from 'react';
import StyleThumb from './StyleThumb.jsx'

class Styles extends React.Component {
  constructor(props) {
    super(props);
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