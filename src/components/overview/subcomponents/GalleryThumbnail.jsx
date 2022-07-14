import React from 'react';

class GalleryThumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }

  onClick = (e) => {
    this.props.changeImage(e)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps)
    console.log(prevState);
    if (nextProps.id === nextProps.selectedImage) {
      return {selected: true}
    } else {
      return {selected: false}
    }
  }

  render() {
    if (this.state.selected) {
      return (
        <img
          className="overlayThumbnail"
          style={{height: '40px', width: '40px', border: '3px solid black'}}
          key={this.props.image.url}
          id={this.props.id}
          src={this.props.image.thumbnail_url}
          onClick={this.onClick}
        />
      )
    } else {
      return (
        <img
          className="overlayThumbnail"
          style={{height: '40px', width: '40px'}}
          key={this.props.image.url}
          id={this.props.id}
          src={this.props.image.thumbnail_url}
          onClick={this.onClick}
        />
      )
    }
  }
}

export default GalleryThumbnail;