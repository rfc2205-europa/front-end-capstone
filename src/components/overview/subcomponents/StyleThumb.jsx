import React from 'react';

class StyleThumb extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    console.log('cliiiiiick');
    this.props.handleStyles(e.target.id)
  }

  render () {
    return (
      <img
        src={this.props.photo}
        style={{height: '120px', width: '80px', margin:'5px', 'border-radius': '50%'}}
        id={this.props.id}
        onClick={this.onClick}
      />
    )
  }
}
export default StyleThumb