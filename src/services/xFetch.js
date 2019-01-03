import axios from 'axios';

const baseUrl = 'http://127.0.0.1:7001';
function xFetch(url) {
  return axios(`${baseUrl}${url}`)
    .then(res => res.data)
    .catch(e => console.log('错误:', e));
}

export default xFetch;
