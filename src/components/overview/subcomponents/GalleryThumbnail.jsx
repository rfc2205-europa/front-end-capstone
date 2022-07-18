import React from 'react';

class GalleryThumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }

  onClick = (e) => {
    console.log(this.props);
    this.props.changeImage(e)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedImage === nextProps.image.index) {
      return {selected: true}
    } else {
      return {selected: false}
    }
  }

  render() {
    if (this.state.selected && !this.props.expanded) {
      return (
        <img
          className="overlayThumbnail"
          style={{height: '40px', width: '30px', border: '3px solid black'}}
          key={this.props.image.url}
          id={this.props.image.index}
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
          id={this.props.image.index}
          src={this.props.image.thumbnail_url}
          onClick={this.onClick}
        />
      )
    }
  }
}

export default GalleryThumbnail;