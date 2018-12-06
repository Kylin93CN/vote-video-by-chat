import React, { Component } from 'react';
import styles from './MainContainer.module.scss';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.contaniner}>
        <div className={styles.videoList}>1</div>
        <div className={styles.videoPlay}>2</div>
        <div className={styles.chatRoom}>3</div>
      </div>
    );
  }
}
