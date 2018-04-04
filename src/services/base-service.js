import axios from 'axios';

class BaseService {
  constructor() {
    this.axios = axios.create({
      baseURL: '//foo.com/api'
    });
  }

  get(url) {
    return this
      .axios(url)
      .then(resp => (resp.data));
  }

  post(url, data) {
    return this
      .axios({
        url,
        method: 'post',
        data: JSON.stringify(data)
      })
      .then(resp => (resp.data));
  }

  put(url, data) {
    return this
      .axios({
        url,
        method: 'put',
        data: JSON.stringify(data)
      })
      .then(resp => (resp.data));
  }

  delete(url) {
    return this
      .axios({
        url,
        method: 'delete'
      })
      .then(resp => (resp.data));
  }

  // Backup handling for broken API endpoints
  handleError(err = {}) {
    const fallback = 'Whoops! Something has gone wrong :(';
    if (!err.response || !err.response.data) return Promise.reject(fallback);
    const error = (err.response.data.message)
      ? err.response.data.message
      : fallback;
    return Promise.reject(error);
  }
}

export default BaseService;