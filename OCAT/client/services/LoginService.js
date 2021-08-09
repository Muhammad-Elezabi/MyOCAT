import Axios from '../utils/http.config';

export class LoginService {
  static submit(credentialsLogin) {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.post(`/users/login`, { credentialsLogin })
        .then(response => response.data.token);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
