import React from 'react';

import GalleryOverlay from './GalleryOverlay.jsx'

class ExpandedGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      currentPhoto: null,
      currentIndex: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    return {
      photos: nextProps.photos,
      currentPhoto: nextProps.currentPhoto,
      currentIndex: nextProps.currentIndex
    }
  }

  render() {
    return (
      <div className="expandedGallery">
        <span className="galleryArrow expandedLeft" onClick={this.props.goLeft}>&#10094;</span>
        <div className="expandedCarouselContainer">
          <GalleryOverlay
            thumbnails={this.state.photos}
            changeImage={this.props.changeImage}
            selectedImage={this.state.currentIndex}
            galleryPhoto={this.state.currentPhoto}
          />
          <img
            className="expandedImage"
            src={this.state.photos[this.state.currentIndex].url}
            style={{height: '100%', width: '100%'}}
            onClick={this.props.regularView}
          />
        </div>
        <span className="galleryArrow expandedRight" onClick={this.props.goRight}>&#10095;</span>
      </div>
    )
  }
}

export default ExpandedGallery;