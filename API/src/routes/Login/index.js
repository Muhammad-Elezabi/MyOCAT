const { LoginService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/users`;

module.exports = server => {

  server.post(
    `${BASE_URL}/login`,
    async (req, res, next) => {
      try {
        const { credentialsLogin } = req.params;
        // verify that your data is making it here to the API by using console.log(assessment);
        // call the AssessmentService.submit function from the API/src/microservices/Assessment/ and
        // supply the correct parameters
        const token = await LoginService.submit(credentialsLogin);
        console.log(token);

        ResponseHandler(
          res,
          `Submitted Login Data`,
          { token },
          next,
        );
      } catch (err) {
        next(err);
      }
    },
  );
};
