import React from 'react';

import GalleryOverlay from './GalleryOverlay.jsx'

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPhoto: null,
      id: null,
      currentIndex: 0
    }
  }

  goLeft = e => {
    let photoCount = this.state.photos.length - 1;
    let currentIndex = this.state.currentIndex;
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: photoCount
      }, () => {
        this.setState({
          currentPhoto: this.state.photos[this.state.currentIndex],
        })
      })
    } else {
      this.setState({
        currentIndex: currentIndex - 1,
      }, () => {
        this.setState({
          currentPhoto: this.state.photos[this.state.currentIndex],
        })
      })
    }
  }

  goRight = e => {
    let photoCount = this.state.photos.length - 1;
    let currentIndex = this.state.currentIndex;
    if (this.state.currentIndex === photoCount) {
      this.setState({
        currentIndex: 0,
      }, () => {
        this.setState({
          currentPhoto: this.state.photos[this.state.currentIndex],
        })
      })
    } else {
      this.setState({
        currentIndex: currentIndex + 1,
      }, () => {
        this.setState({
          currentPhoto: this.state.photos[this.state.currentIndex],
        })
      })
    }
  }

  changeImage = (e) => {
    this.setState({
      currentIndex: Number(e.target.id)
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('previous state:', prevState);
    // console.log('next props:', nextProps)
    // let reset = false;
    if (nextProps.photos && nextProps.style !== prevState.id) {
      // reset = true;
      return {
        photos: nextProps.photos,
        currentPhoto: nextProps.photos[prevState.currentIndex],
        id: nextProps.style,
      }
    } else {
      return null;
    }

    // if (reset) {
    //   this.setState({
    //     currentIndex: 0
    //   })
    // }
  }

  render() {
    console.log('gallery state at render:', this.state);
    if (this.state.photos.length > 0) {
      // console.log('currentPhoto:', this.state.currentPhoto.url);
      // console.log('photo at index:', this.state.photos[this.state.currentIndex].url)
      return (
        <div className='gallery'>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <GalleryOverlay
              thumbnails={this.props.photos}
              changeImage={this.changeImage}
            />
            <span className="galleryArrow left" onClick={this.goLeft}>&#10094;</span>
            <img
              className="image"
              src={this.state.photos[this.state.currentIndex].url}
              style={{height: '100%', width: '100%'}}
            />
            <span className="galleryArrow right" onClick={this.goRight}>&#10095;</span>
          </div>
        </div>
      )
    }
    return (
      <div className='gallery'>
        <div>
          <p>loading images</p>
        </div>
      </div>
    )
  }
}

export default Gallery