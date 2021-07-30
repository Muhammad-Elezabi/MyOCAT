const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  assessment.created_at = new Date();
  assessment.score = parseInt(assessment.judicialContact) + parseInt(assessment.catAltercations) +
  parseInt(assessment.ownerAltercations) + parseInt(assessment.playsWell) + parseInt(assessment.Hisses);
  assessment.cat_name = assessment.catName;
  assessment.cat_date_of_birth = assessment.DOB;
  if (assessment.score <= 1) {
    assessment.risk_level = `Low`;
  }
  else if (assessment.score <= 3) {
    assessment.risk_level = `Medium`;
  }
  else {
    assessment.risk_level = `High`;
  }
  Assessments.forge({
    score: assessment.score,
    risk_level: assessment.risk_level,
    cat_name: assessment.cat_name,
    cat_date_of_birth: assessment.DOB,
    created_at: assessment.created_at,
  }).save();
};

exports.getList = () =>
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  Assessments.fetchAll().then((resData) => resData.serialize());
