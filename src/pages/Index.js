import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import socket from 'socket.io-client';
import VideoList from '../components/VideoList';
import styles from './Index.module.scss';
import VideoPlayer from '../components/VideoPlayer';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'GET_PING',
    });
    setInterval(() => {
      dispatch({
        type: 'GET_PING',
      });
    }, 3000);
    const mySocket = socket('http://localhost:7001/chat');

    mySocket.on('connect', () => {
      console.log('connect!');
      mySocket.emit('chat', 'hello world!');
    });

    mySocket.on('res', msg => {
      console.log('res from server: %s!', msg);
    });
  }

  render() {
    const { pingInfo } = this.props.movie;
    const { liveMovie = {}, movieList = [] } = pingInfo;
    const { dispatch } = this.props;
    const videoJsOptions = {
      autoplay: 'muted',
      controls: true,
      sources: [{
        src: liveMovie.movieUrl - 1,
        type: 'video/mp4',
      }],
      height: '500px',
      width: '720px',
      currentTime: liveMovie.currentTime,
    };
    return (
      <div className={styles.contaniner}>
        <div className={styles.header}>
          Header
        </div>
        <div className={styles.videoList}>
          <VideoList movieList={movieList} dispatch={dispatch} />
        </div>
        <div className={styles.videoPlay}>
          {liveMovie.movieUrl ? <VideoPlayer {...videoJsOptions} /> : null}
        </div>
        <div className={styles.chatRoom}>3</div>
      </div>
    );
  }
}
Index.propTypes = {
  movie: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(Index);
