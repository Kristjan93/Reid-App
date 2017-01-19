import React from 'react';
import Radium from 'radium';
import 'react-image-gallery/styles/css/image-gallery';

import ImageGallery from 'react-image-gallery';
import Paper from 'material-ui/Paper';

import { HOME_ONE, HOME_TWO } from '../constants/srcPictures.js';

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
        original: HOME_ONE,
        description: 'See the incredible landscape in our area',
      },
      {
        original: HOME_TWO,
      }
    ];
    return (
      <Paper zDepth={1}>
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