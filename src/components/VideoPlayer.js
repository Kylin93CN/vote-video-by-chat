import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends Component {
  componentDidMount() {
    // instantiate Video.js
    const options = this.props;
    if (!options.currentTime) {
      return;
    }
    this.player = videojs(this.videoNode, options, function onPlayerReady() {
      console.log('onPlayerReady', this);
      this.currentTime(options.currentTime);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const options = this.props;
    const { player } = this;
    if (player) {
      if (options.movieUrl !== player.currentSrc()) {
        player.src(options.movieUrl);
      }
      const diffTIme = player.currentTime() - options.currentTime;
      if (Math.abs(diffTIme) > 10) {
        player.currentTime(options.currentTime);
      }
      // 暂停状态时 不播放
      if (!player.paused()) {
        player.play();
      }
    }
    return (
      <div>
        <div data-vjs-player>
          <video ref={node => { this.videoNode = node; }} className="video-js" />
        </div>
      </div>
    );
  }
}
