const AWS = require('aws-sdk');

const attachPrincipalPolicy = (policyName, principal) => {
  const iot = new AWS.Iot();
  const params = { policyName, principal };
  return iot.attachPrincipalPolicy(params).promise();
};

module.exports = {
  attachPrincipalPolicy,
};
