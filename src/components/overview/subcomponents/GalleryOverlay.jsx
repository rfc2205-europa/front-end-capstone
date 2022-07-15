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
      currentIndex: 0,
      browse: false
    }

    this.state.thumbnails.map((thumbnail, x) => {
      thumbnail.index = x
    })
  }

  goLeft = e => {
    let newActiveThumbnails = [];
    if (this.state.firstThumbnail > 0) {
      let start = this.state.firstThumbnail - 1;
      let end = this.state.lastThumbnail - 1;
      for (var x = 0; x < this.state.thumbnails.length; x++) {
        let currentThumbnail = this.state.thumbnails[x];
        if (currentThumbnail.index >= start && currentThumbnail.index <= end) {
          newActiveThumbnails.push(currentThumbnail)
        }
      }
      console.log('start:', start, '; end:', end)
      this.setState({
        browse: true,
        activeThumbnails: newActiveThumbnails,
        firstThumbnail: start,
        lastThumbnail: end
      })
    }
  }

  goRight = e => {
    let newActiveThumbnails = [];
    if (this.state.lastThumbnail + 1 < this.state.thumbnails.length) {
      let start = this.state.firstThumbnail + 1;
      let end = this.state.lastThumbnail + 1;
      console.log('start:', start, '; end:', end)
      for (var x = 0; x < this.state.thumbnails.length; x++) {
        let currentThumbnail = this.state.thumbnails[x];
        if (currentThumbnail.index >= start && currentThumbnail.index <= end) {
          newActiveThumbnails.push(currentThumbnail)
        }
      }
      this.setState({
        browse: true,
        activeThumbnails: newActiveThumbnails,
        firstThumbnail: start,
        lastThumbnail: end
      })
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('next overlay props:', nextProps);
    // console.log('previous overlay state:', prevState);
    nextProps.thumbnails.map((thumbnail, x) => {
      thumbnail.index = x
    })
    if (prevState.activeThumbnails.length === 0 || prevState.browse === false) {
      let activeThumbnails = [];
      if (nextProps.selectedImage <= nextProps.thumbnails.length - 7) {
        for (var x = nextProps.selectedImage; x < nextProps.selectedImage + 7; x++) {
          activeThumbnails.push(nextProps.thumbnails[x])
        }
        return {
          thumbnails: nextProps.thumbnails,
          activeThumbnails: activeThumbnails,
          firstThumbnail: x - 7,
          lastThumbnail: x - 1,
          currentIndex: 0,
          browse: false
        }
      } else {
        for (var x = nextProps.thumbnails.length - 7; x < nextProps.thumbnails.length; x++) {
          activeThumbnails.push(nextProps.thumbnails[x]);
        }
        return {
          activeThumbnails: activeThumbnails,
          currentIndex: nextProps.selectedImage - (nextProps.thumbnails.length - 7),
          firstThumbnail: nextProps.thumbnails.length - 7,
          lastThumbnail: nextProps.thumbnails.length - 1
        }
      }
    } else {
      return null;
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
                id={image.index}
                selectedImage={this.props.selectedImage}
                changeImage={this.props.changeImage}
              />
            )
          })}
        </span>
      )
    } else if (this.props.selectedImage === 0 && this.state.firstThumbnail === 0 || this.state.firstThumbnail === 0) {
      console.log('no left arrow');
      return (
        <span className="galleryOverlay">
          <br />
          {/* <span className="thumbnailArrowLeft" onClick={this.goLeft}>&#10094;</span> */}
          {this.state.activeThumbnails.map((image, x) => {
            while (x < 7) {
              return (
                <GalleryThumbnail
                  key={image.url}
                  image={image}
                  id={image.index}
                  selectedImage={this.props.selectedImage}
                  changeImage={this.props.changeImage}
                />
              )
            }
          })}
          <span className="thumbNailArrowRight" onClick={this.goRight}>&#10095;</span>
        </span>
      )
    } else if (this.props.selectedImage > 0 && this.props.selectedImage <= this.props.thumbnails.length-7 || this.state.firstThumbnail > 0 && this.state.lastThumbnail < this.state.thumbnails.length - 1) {
      console.log('both arrows');
      return (
        <span className="galleryOverlay">
          <span className="thumbnailArrowLeft" onClick={this.goLeft}>&#10094;</span>
          {this.state.activeThumbnails.map((image, x) => {
            while (x < 7) {
              return (
                <GalleryThumbnail
                  key={image.url}
                  image={image}
                  id={image.index}
                  selectedImage={this.props.selectedImage}
                  changeImage={this.props.changeImage}
                />
              )
            }
          })}
          <span className="thumbNailArrowRight" onClick={this.goRight}>&#10095;</span>
        </span>
      )
    } else if (
        this.props.selectedImage > this.props.thumbnails.length-7
        || this.state.lastThumbnail > this.props.thumbnails.length - 7
      ) {
      console.log('no right arrow')
      return (
        <span className="galleryOverlay">
          <span className="thumbnailArrowLeft" onClick={this.goLeft}>&#10094;</span>
          {this.state.activeThumbnails.map((image, x) => {
            while (x < 7) {
              return (
                <GalleryThumbnail
                  key={image.url}
                  image={image}
                  id={image.index}
                  selectedImage={this.props.selectedImage}
                  changeImage={this.props.changeImage}
                />
              )
            }
          })}
          <br />
          {/* <span className="thumbNailArrowRight" onClick={this.goRight}>&#10095;</span> */}
        </span>
      )
    }
  }
}

export default GalleryOverlay