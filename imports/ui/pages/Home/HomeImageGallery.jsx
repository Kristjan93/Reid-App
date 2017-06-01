import React from 'react';
import Radium from 'radium'
import Paper from 'material-ui/Paper';
import 'react-image-gallery/styles/css/image-gallery';
import ImageGallery from 'react-image-gallery';
import { FOR_1, FOR_2, FOR_3 } from '../../constants/srcPictures.js';

class HomeImageGallery extends React.Component {

  handleImageLoad(event) {
    // console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
      {
        original: FOR_2,
        description: 'See the incredible landscape in our area',
      },
      {
        original: FOR_1,
        description: 'See the incredible landscape in our area',
      },
      {
        original: FOR_3,
        description: 'See the incredible landscape in our area',
      },
    ];
    return (
        <Paper zDepth={1}>
          <ImageGallery
            ref={i => this._imageGallery = i}
            items={images}
            slideInterval={2000}
            showThumbnails={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showPlayButton={false}
            showBullets={true}
            onImageLoad={this.handleImageLoad} />
        </Paper>
      );
  }
}

export default Radium(HomeImageGallery);