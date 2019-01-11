import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Input } from 'antd';

import VideoList from '../components/VideoList';
import ChatRoom from '../components/ChatRoom';
import VideoPlayer from '../components/VideoPlayer';
import styles from './Index.module.scss';

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
  }

  render() {
    const { pingInfo = {} } = this.props.movie;
    const { liveMovie = {}, movieList = [] } = pingInfo;
    const { dispatch } = this.props;
    // const xx = window.navigator.userAgent;
    liveMovie.movieUrl = '123';
    liveMovie.currentTime = '123';
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
      <div>
        <Input value="http://play.yunxi.tv/livestream/flash?id=223de80f3d9a4f8b98ddf81bd044b9ac" />
        <div className={styles.header}>
          Header
        </div>
        <div className={styles.contaniner}>
          <div className={styles.videoList}>
            <VideoList movieList={movieList} dispatch={dispatch} />
          </div>
          <div className={styles.videoPlay}>
            {liveMovie.movieUrl ? <VideoPlayer {...videoJsOptions} /> : null}
          </div>
          <div className={styles.chatRoom}>
            <ChatRoom />
          </div>
        </div>
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
