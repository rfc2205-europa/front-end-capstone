import React from 'react';

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

  printCurrentProps = () => {
    console.log(this.props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('previous state:', prevState);
    console.log('next props:', nextProps)
    if (nextProps.photos && nextProps.style !== prevState.id) {
      return {
        photos: nextProps.photos,
        currentPhoto: nextProps.photos[prevState.currentIndex],
        id: nextProps.style
      }
    } else {
      return null;
    }
  }

  render() {
    console.log('state at render:', this.state);
    if (this.state.photos.length > 0) {
      return (
        <div className='gallery'>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <span className="galleryArrow left" onClick={this.goLeft}>&#10094;</span>
            <img
              className="image"
              src={this.state.currentPhoto.url}
              style={{height: '100%', width: '100%'}}
            />
            <span className="galleryArrow right" onClick={this.goRight}>&#10095;</span>
            {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>


            </div> */}
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