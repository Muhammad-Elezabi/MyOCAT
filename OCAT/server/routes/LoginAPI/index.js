const router = require(`express`).Router();
const { LoginService } = require(`../../libs`);

router.post(`/login`, async (req, res, next) => {
  try {
    const { credentialsLogin } = req.body;
    // call the submit function from the server/libs/AssessmentService
    const token = await LoginService.submit(credentialsLogin);
    console.log(token);
    res
      .status(200)
      .json({ token });
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/users`;
