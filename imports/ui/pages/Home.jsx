import React from 'react';
import Radium from 'radium';
import 'react-image-gallery/styles/css/image-gallery';

import ImageGallery from 'react-image-gallery';
import Paper from 'material-ui/Paper';

const styles = {
  base: {
    color: '#333',
  },
};

class Home extends React.Component {

  handleImageLoad(event) {
    // console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
      {
        original: '/images/homePic1.jpg',
        description: 'See the incredible landscape in our area',
      },
      {
        original: '/images/homePic2jpg.jpg',
      }
    ];
    return (
      <Paper zDepth={2}>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          slideInterval={2000}
          showThumbnails={false}
          showPlayButton={false}
          showBullets={true}
          onImageLoad={this.handleImageLoad} />
      </Paper>
    );
  }
}

export default Radium(Home);