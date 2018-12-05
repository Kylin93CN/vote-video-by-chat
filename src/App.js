import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import './App.css';


const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'http://lvxiang.site/public/dy003.mp4',
    type: 'video/mp4',
  }],
};

const App = () => (
  <VideoPlayer {...videoJsOptions} />
);

export default App;
