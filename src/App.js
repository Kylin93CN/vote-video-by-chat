import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      option: {
        autoplay: true,
        controls: true,
        notSupportedMessage: 'xxx',
        sources: [{
          src: 'http://lvxiang.site/public/dy003.mp4',
          type: 'video/mp4',
        }],
      },
    };
  }

  onClick = () => {
    const { state } = this;
    const myOption = JSON.parse(JSON.stringify(state.option));
    myOption.sources[0].src = 'http://lvxiang.site/public/dy001.mp4';
    this.setState({
      option: myOption,
    });
  }

  render() {
    return (
      <div>
        <VideoPlayer {...this.state.option} />
        <button type="button" value="123" onClick={this.onClick}>123123</button>
      </div>
    );
  }
}
