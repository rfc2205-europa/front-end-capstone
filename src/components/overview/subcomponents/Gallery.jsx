import React from 'react';

import GalleryOverlay from './GalleryOverlay.jsx'
import ExpandedGallery from './ExpandedGallery.jsx'

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPhoto: null,
      id: null,
      currentIndex: 0,
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

  expandedView = e => {
    this.props.expandedView(e)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.photos && nextProps.style !== prevState.id) {
      return {
        photos: nextProps.photos,
        currentPhoto: nextProps.photos[prevState.currentIndex],
        id: nextProps.style,
      }
    } else {
      return null;
    }
  }

  render() {
    if (!this.props.expanded) {
      if (this.state.photos.length > 0 && this.state.photos.length <= 7) {
        return (
          <div className='gallery'>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <span className="galleryArrow left" onClick={this.goLeft}>&#10094;</span>
              <div className="carouselContainer" style={{display: 'flex', height: '500px'}}>
                <GalleryOverlay
                  thumbnails={this.props.photos}
                  changeImage={this.changeImage}
                  selectedImage={this.state.currentIndex}
                  galleryPhoto={this.state.currentPhoto}
                  expanded={this.props.expanded}
                />
                <img
                  className="image"
                  src={this.state.photos[this.state.currentIndex].thumbnail_url}
                  style={{height: '100%', width: '100%'}}
                  onClick={this.expandedView}
                />
              </div>
              <span className="galleryArrow right" onClick={this.goRight}>&#10095;</span>
            </div>
          </div>
        )
      } else if (this.state.photos.length > 7) {
        console.log('more than 7 photos');
        return (
          <div className='gallery'>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <span className="galleryArrow left" onClick={this.goLeft}>&#10094;</span>
              <div className="carouselContainer" style={{display: 'flex', height: '500px'}}>
                <GalleryOverlay
                  thumbnails={this.state.photos}
                  changeImage={this.changeImage}
                  selectedImage={this.state.currentIndex}
                  galleryPhoto={this.state.currentPhoto}
                  expanded={this.props.expanded}
                />
                <img
                  className="image"
                  src={this.state.photos[this.state.currentIndex].thumbnail_url}
                  style={{height: '100%', width: '100%'}}
                  onClick={this.expandedView}
                />
              </div>
              <span className="galleryArrow right" onClick={this.goRight}>&#10095;</span>
            </div>
          </div>
        )
      }
    } else if (this.props.expanded) {
      return (
        <ExpandedGallery
          photos={this.props.photos}
          currentPhoto={this.state.currentPhoto}
          currentIndex={this.state.currentIndex}
          regularView={this.props.expandedView}
          changeImage={this.changeImage}
          goLeft={this.goLeft}
          goRight={this.goRight}
          expanded={this.props.expanded}
        />
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