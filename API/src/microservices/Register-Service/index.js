const { Credentials } = require(`../Database`);

exports.submit = async (credentials) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  Credentials.forge({
    firstname: credentials.firstName,
    lastname: credentials.lastName,
    email: credentials.email,
    password: credentials.password,
  }).save();
};
