import httpUtil from './xFetch';

const api = {
  async ping() {
    return httpUtil.get('/ping');
  },
};

export default api;
