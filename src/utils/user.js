const verifyToken = require('./token');

async function getLoggedUser(resolve, parent, args, ctx, info) {
  try {
    const token = ctx.event.headers.Authorization;
    if (token) {
      const verifiedToken = await verifyToken(token);
      ctx.user = await ctx.prisma.user({ cognitoId: verifiedToken.sub });
    } else {
      ctx.user = {
        role: 'GUEST',
      }
    }
    return resolve();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  getLoggedUser,
};