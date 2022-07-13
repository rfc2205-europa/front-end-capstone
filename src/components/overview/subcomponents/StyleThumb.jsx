import React from 'react';

class StyleThumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }

  onClick = (e) => {
    this.props.handleStyles(e.target.id)
    if (this.props.handleSelection(this.props.id)) {
      this.setState({
        selected: true,
      })
    } else {
      this.setState({
        selected: false,
      })
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.selectedStyle === nextProps.id) {
      return {selected: true}
    } else {
      return {selected: false}
    }

  }

  render () {
     if (this.state.selected) {
      return (
        <img
        src={this.props.photo}
        style={{height: '120px', width: '120px', margin:'5px', border: '3px solid black', borderRadius: '50%'}}
        id={this.props.id}
        onClick={this.onClick}
      />
      )
     }
     else { return (
      <img
        src={this.props.photo}
        style={{height: '120px', width: '120px', margin:'5px', borderRadius: '50%'}}
        id={this.props.id}
        onClick={this.onClick}
      />
    )}
  }
}
export default StyleThumb