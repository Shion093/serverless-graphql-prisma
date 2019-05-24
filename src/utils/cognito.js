const AWS = require('aws-sdk');

const CognitoProvider = new AWS.CognitoIdentityServiceProvider();

async function deleteCognitoUser(cognitoId) {
  const params = {
    UserPoolId: process.env.USER_POOL_ID,
    Username: cognitoId,
  };
  try {
    await CognitoProvider.adminDeleteUser(params).promise();
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  deleteCognitoUser,
};
