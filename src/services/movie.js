import xFetch from './xFetch';

const api = {
  async ping() {
    return xFetch('/ping');
  },
};

export default api;
