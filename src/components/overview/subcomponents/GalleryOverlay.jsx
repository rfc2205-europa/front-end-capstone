import React from 'react';
import GalleryThumbnail from './GalleryThumbnail.jsx';

class GalleryOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
      activeThumbnails: [],
      firstThumbnail: null,
      lastThumbnail: null,
      currentIndex: 0
    }

    this.state.thumbnails.map((thumbnail, x) => {
      thumbnail.index = x
    })
  }

  goLeft = e => {
    // this.props.goLeft(e);
    console.log(this.props);
  }

  goRight = e => {
    // this.props.goRight(e);
    // console.log(this.props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('next overlay props:', nextProps);
    // console.log('previous overlay state:', prevState);
    nextProps.thumbnails.map((thumbnail, x) => {
      thumbnail.index = x
    })
    let activeThumbnails = [];
    if (nextProps.selectedImage <= nextProps.thumbnails.length - 7) {
      for (var x = nextProps.selectedImage; x < nextProps.selectedImage + 7; x++) {
        activeThumbnails.push(nextProps.thumbnails[x])
      }
      return {
        thumbnails: nextProps.thumbnails,
        activeThumbnails: activeThumbnails,
        firstThumbnail: x - 7,
        lastThumbnail: x,
        currentIndex: 0
      }
    } else {
      for (var x = nextProps.thumbnails.length - 7; x < nextProps.thumbnails.length; x++) {
        activeThumbnails.push(nextProps.thumbnails[x]);
      }
      return {
        activeThumbnails: activeThumbnails,
        currentIndex: nextProps.selectedImage - (nextProps.thumbnails.length - 7)
      }
    }
  }

  render() {
    // let activeThumbnails = [];
    //   for (var x = this.state.currentIndex; x < this.state.currentIndex + 7; x++) {
    //     activeThumbnails.push(this.state.photos[x])
    //   }
    if (this.props.thumbnails.length <= 7) {
      return (
        <span className="galleryOverlay">
          {this.props.thumbnails.map((image, x) => {
            return (
              <GalleryThumbnail
                key={image.url}
                image={image}
                id={x}
                selectedImage={this.props.selectedImage}
                changeImage={this.props.changeImage}
              />
            )
          })}
        </span>
      )
    } else if (this.props.selectedImage === 0) {
      return (
        <span className="galleryOverlay">
          {/* <span className="thumbnailArrowLeft" onClick={this.goLeft}>&#10094;</span> */}
          {this.state.activeThumbnails.map((image, x) => {
            while (x < 7) {
              return (
                <GalleryThumbnail
                  key={image.url}
                  image={image}
                  id={x}
                  selectedImage={this.state.currentIndex}
                  changeImage={this.props.changeImage}
                />
              )
            }
          })}
          <span className="thumbNailArrowRight" onClick={this.goRight}>&#10095;</span>
        </span>
      )
    } else if (this.props.selectedImage > 0 && this.props.selectedImage < this.props.thumbnails.length-1) {
      console.log('middle thumbnail:', this.props.selectedImage)
      return (
        <span className="galleryOverlay">
          <span className="thumbnailArrowLeft" onClick={this.goLeft}>&#10094;</span>
          {this.state.activeThumbnails.map((image, x) => {
            while (x < 7) {
              return (
                <GalleryThumbnail
                  key={image.url}
                  image={image}
                  id={x}
                  selectedImage={this.state.currentIndex}
                  changeImage={this.props.changeImage}
                />
              )
            }
          })}
          <span className="thumbNailArrowRight" onClick={this.goRight}>&#10095;</span>
        </span>
      )
    } else if (this.props.selectedImage === this.props.thumbnails.length-1) {
      return (
        <span className="galleryOverlay">
          <span className="thumbnailArrowLeft" onClick={this.goLeft}>&#10094;</span>
          {this.state.activeThumbnails.map((image, x) => {
            while (x < 7) {
              return (
                <GalleryThumbnail
                  key={image.url}
                  image={image}
                  id={x}
                  selectedImage={this.state.currentIndex}
                  changeImage={this.props.changeImage}
                />
              )
            }
          })}
          {/* <span className="thumbNailArrowRight" onClick={this.goRight}>&#10095;</span> */}
        </span>
      )
    }
  }
}

export default GalleryOverlay