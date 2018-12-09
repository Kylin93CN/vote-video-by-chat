import React, { Component } from 'react';
import styles from './MainContainer.module.scss';
import VideoPlayer from './VideoPlayer';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const videoJsOptions = {
      autoplay: 'muted',
      controls: true,
      sources: [{
        src: 'http://lvxiang.site/public/dy003.mp4',
        type: 'video/mp4',
      }],
      // currentTime: 5,
      height: '500px',
      width: '720px',
    };
    return (
      <div className={styles.contaniner}>
        <div className={styles.header}>Header</div>
        <div className={styles.videoList}>1</div>
        <div className={styles.videoPlay}>
          <VideoPlayer {...videoJsOptions} />
        </div>
        <div className={styles.chatRoom}>3</div>
      </div>
    );
  }
}
