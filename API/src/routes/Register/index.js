const { RegisterService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/users`;

module.exports = server => {

  server.post(
    `${BASE_URL}/register`,
    async (req, res, next) => {
      try {
        const { credentials } = req.params;
        // verify that your data is making it here to the API by using console.log(assessment);
        // call the AssessmentService.submit function from the API/src/microservices/Assessment/ and
        // supply the correct parameters
        RegisterService.submit(credentials);

        ResponseHandler(
          res,
          `Submitted Register Data`,
          {},
          next,
        );
      } catch (err) {
        next(err);
      }
    },
  );
};
