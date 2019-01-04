import axios from 'axios';

const baseUrl = 'http://127.0.0.1:7001';
function xFetch(url, option) {
  const api = `${baseUrl}${url}`;
  if (option) {
    return axios({
      method: 'put',
      url: api,
      data: option,
    });
  }
  return axios(api)
    .then(res => res.data)
    .catch(e => console.log('错误:', e));
}

export default xFetch;
