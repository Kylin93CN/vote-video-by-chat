import xFetch from './xFetch';

const api = {
  async ping() {
    return xFetch('/ping');
  },
  async addScore(param) {
    const url = '/addScore';
    return xFetch(url, param);
  },
};

export default api;
