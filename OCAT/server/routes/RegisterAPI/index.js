const router = require(`express`).Router();
const { RegisterService } = require(`../../libs`);

router.post(`/register`, (req, res, next) => {
  try {
    const { credentials } = req.body;
    // call the submit function from the server/libs/AssessmentService
    RegisterService.submit(credentials);
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/users`;
