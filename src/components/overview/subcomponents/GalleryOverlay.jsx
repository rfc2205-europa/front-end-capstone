import React from 'react';
import GalleryThumbnail from './GalleryThumbnail.jsx';

class GalleryOverlay extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
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
  }
}

export default GalleryOverlay