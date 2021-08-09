const { client, config } = require(`../../utils`);
const { InternalServerError } = require(`restify-errors`);

exports.submit = (credentialsLogin) => new Promise((resolve, reject) => {
  // this function sends a request to the API
  // finish the logic to handle the response when returned from the API
  client.post(`/users/login`,
    { credentialsLogin },
    (err, req, res, body) => {
      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }
      console.log(body.data.token);
      resolve(body.data.token);
    });
});
