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
        <p className={styles.videoList}>1</p>
        <p className={styles.videoPlay}>2</p>
        <p className={styles.chatRoom}>3</p>
      </div>
    );
  }
}
