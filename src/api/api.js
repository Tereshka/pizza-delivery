const API_URL = 'https://my-json-server.typicode.com/tereshka/pizza-delivery';

const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(res => {
        // reject(response);
        res.json().then(error => {
          reject(error);
        });
      });
  });
};

const api = {
  get(url) {
    return fetchApi(`${API_URL}${url}`, {
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
    });
  },
  post(url, options = {}) {
    return fetchApi(`${API_URL}${url}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(options)
    });
  }
};

export default api;