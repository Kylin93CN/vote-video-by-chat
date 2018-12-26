import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import styles from './MainContainer.module.scss';
import VideoPlayer from '../components/VideoPlayer';

class MainContainer extends Component {
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
  }

  render() {
    const { pingInfo } = this.props.movie;
    const videoJsOptions = {
      autoplay: 'muted',
      controls: true,
      sources: [{
        src: pingInfo.movieUrl,
        type: 'video/mp4',
      }],
      height: '500px',
      width: '720px',
      currentTime: pingInfo.currentTime,
    };
    return (
      pingInfo.movieUrl
        ? (
          <div className={styles.contaniner}>
            <div className={styles.header}>Header</div>
            <div className={styles.videoList}>1</div>
            <div className={styles.videoPlay}>
              <VideoPlayer {...videoJsOptions} />
            </div>
            <div className={styles.chatRoom}>3</div>
          </div>
        ) : <Button type="primary">123</Button>
    );
  }
}
MainContainer.propTypes = {
  movie: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(MainContainer);
