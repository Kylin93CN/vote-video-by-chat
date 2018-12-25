// // import axios from 'axios';
// import fetch from 'isomorphic-fetch';

// function xFetch(url) {
//   // axios(url)
//   //   .then(res => {
//   //     console.log('axios-res-data', res.data);
//   //     return res.data;
//   //   })
//   //   .catch(e => console.log('错误1111:', e));
//   // fetch(url)
//   //   .then(response => {
//   //     if (response.status >= 400) {
//   //       throw new Error('Bad response from server');
//   //     }
//   //     return response.json();
//   //   })
//   //   .then(stories => {
//   //     console.log(stories);
//   //     return Promise.resolve(stories);
//   //   });
// }

// export default xFetch;
/* eslint-disable*/
const httpUtil = {};
const baseUrl = 'http://localhost:7001';

httpUtil.get = (url, params) => {
  // if (params) {
  //   let paramsArray = [];
  //   Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
  //   if (url.search(/\?/) === -1) {
  //     url += '?' + paramsArray.join('&')
  //   } else {
  //     url += '&' + paramsArray.join('&')
  //   }
  // }
  console.log(params);
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${url}`, {
      method: 'GET',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject({ status: response.status })
        }
      })
        .then((response) => {
            resolve(response);
        })
        .catch((err) => {
            reject({ status: -1 });
        })
  })
};

export default httpUtil;
