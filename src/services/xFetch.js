import axios from 'axios';

const baseUrl = 'http://127.0.0.1:7001';
function xFetch(url) {
  return axios(`${baseUrl}${url}`)
    .then(res => {
      console.log('axios-res-data', res.data);
      return res.data;
    })
    .catch(e => console.log('错误1111:', e));
}

export default xFetch;
