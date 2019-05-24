const jose = require('node-jose');

const keysUrl = process.env.COGNITO_KEYS_URL;
const clientId = process.env.USER_POOL_CLIENT_ID;

function verifyToken (token) {
  return new Promise( async (resolve, reject) => {
    try {
      const sections = token.split('.');
      // get the kid from the headers prior to verification
      let header = jose.util.base64url.decode(sections[0]);
      header = JSON.parse(header);
      const kid = header.kid;

      // download the public keys
      const { keys } = await (await fetch(keysUrl)).json();

      // search for the kid in the downloaded public keys
      const keyMatch = keys.find(key => key.kid === kid);

      // construct the public key
      const asKey = await jose.JWK.asKey(keyMatch);

      // verify the signature
      const createVerify = await jose.JWS.createVerify(asKey).verify(token);

      // now we can use the claims
      const claims = JSON.parse(createVerify.payload);

      // additionally we can verify the token expiration
      const currentTs = Math.floor(new Date() / 1000);
      if (currentTs > claims.exp) {
        reject({ tokenExpired : true });
      }

      // and the Audience (use claims.client_id if verifying an access token)
      if (claims.aud !== clientId) {
        reject({ wrongAudience : true});
      }

      resolve(claims);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  })
}

module.exports = verifyToken;