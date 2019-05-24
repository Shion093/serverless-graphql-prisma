const { attachPrincipalPolicy } = require('../utils/iot');

const handler = async event => {
  const POLICY_NAME = 'devgear-notifications';
  console.log(event);
  const principal = event.requestContext.identity.cognitoIdentityId;
  await attachPrincipalPolicy(POLICY_NAME, principal);
  return event;
};

module.exports = handler;
