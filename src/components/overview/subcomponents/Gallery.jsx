import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.photos) {
      // console.log(this.props.photos)
      return (
        <div className='gallery'>
          <div>
            <img
              src={this.props.photos[0].url}
              style={{height: '100%', width: '100%'}}
            />
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