import React, { Component } from 'react';
import styles from './MainContainer.scss';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="contaniner">
        <p className="videoList">1</p>
        <p className={styles.videoPlay}>2</p>
        <p className={styles.chatRoom}>3</p>
      </div>
    );
  }
}
