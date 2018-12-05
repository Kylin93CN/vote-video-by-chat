import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  onClick = () => {
    this.player.src('http://lvxiang.site/public/dy001.mp4');
    this.player.autoplay();
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video ref={node => { this.videoNode = node; }} className="video-js" />
          <button style={{ right: '30px', position: 'absolute' }} type="button" value="123" onClick={this.onClick}>adsadsadsad萨达所大所阿呆阿萨德</button>
        </div>
      </div>
    );
  }
}
