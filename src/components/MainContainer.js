import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './MainContainer.module.scss';
import VideoPlayer from './VideoPlayer';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    fetch('http://127.0.0.1:7001/ping')
      .then(res => {
        res.json();
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: 'AAAA',
          payload: res,
        });
      });
  }

  render() {
    const { reducers } = this.props.reducers;
    console.log(reducers);
    const videoJsOptions = {
      autoplay: 'muted',
      controls: true,
      sources: [{
        src: 'http://lvxiang.site/public/dy003.mp4',
        type: 'video/mp4',
      }],
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

const mapStateToProps = state => ({
  reducers: state.movie,
});

export default connect(mapStateToProps)(MainContainer);
