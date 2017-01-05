import React from 'react';
import Radium from 'radium';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery';

const styles = {
  base: {
    color: '#333',
  },
};

class Home extends React.Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
      {
        original: '/images/homePic1.jpg',
      },
      {
        original: '/images/homePic2jpg.jpg',
      }
    ];
    return (
      <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
        onImageLoad={this.handleImageLoad} />
    );
  }
}

export default Radium(Home);