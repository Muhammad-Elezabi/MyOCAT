const { submit } = require(`../../../../OCAT/server/libs/LoginService`);
const { Credentials } = require(`../Database`);

exports.submit = async (credentialsLogin) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  let isAuthenticated = false;
  try {
    const user = await Credentials.where({ email: credentialsLogin.email, password: credentialsLogin.password })
      .fetch({ require: true }).then((resData) => resData.serialize());
    console.log(`i am happy`);
    isAuthenticated = true;
    return isAuthenticated;
  } catch (error) {
    console.log(`hello world`);
    isAuthenticated = false;
    return isAuthenticated;
  }
};
