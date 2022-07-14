import React from 'react';

class GalleryOverlay extends React.Component {
  constructor(props) {
    super(props);

  }

  onClick = (e, x) => {
    this.props.changeImage(e, x)
  }

  render() {
    return (
      <div className="galleryOverlay">
        {this.props.thumbnails.map((image, x) => {
          return (
            <img
              style={{height: '40px', width: '40px'}}
              key={image.url}
              id={x}
              src={image.thumbnail_url}
              onClick={this.onClick}
            />
          )
        })}
      </div>
    )
  }
}

export default GalleryOverlay