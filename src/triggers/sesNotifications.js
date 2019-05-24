const AWS = require('aws-sdk');

const sns = new AWS.SNS();

const handler = async event => {
  const message = event.Records[0].Sns.Message;
  console.log(message);
  return {
    AmazonSnsSubscriptionSucceeded : () => {
      console.log(message)
    },
    Bounce : async () => {
      console.log(message);
    },
    Complaint : async () => {
      console.log(message);
    },
    Delivery : async () => {
      console.log(message);
    }
  }[message.notificationType]();
};

module.exports = handler;
