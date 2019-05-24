const { deleteCognitoUser } = require('../../utils/cognito');
const { attachPrincipalPolicy } = require('../../utils/iot');

const resolvers = {
  Mutation : {
    async createUser(_, args, ctx, info) {
      try {
        const user = await ctx.db.query.user({
          where : {
            email     : args.data.email,
            cognitoId : args.data.cognitoId,
          }
        }, info);
        if (user) {
          return user;
        }
        return ctx.db.mutation.createUser({
          data : {
            ...args.data,
          }
        }, info);
      } catch (err) {
        throw new Error(err);
      }
    },
    async updateUser(_, args, ctx, info) {
      try {
        const updates = { ...args.data };
        const user = await ctx.db.mutation.updateUser({
          where : {
            id : args.id,
          },
          data  : updates,
        }, info);
        console.log(user);
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteUser(_, args, ctx, info) {
      try {
        const user = await ctx.db.mutation.deleteUser({
          where : {
            id : args.id,
          },
        }, info);
        if (args.cognito) {
          await deleteCognitoUser(user.cognitoId)
        }
        console.log(user);
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
    attachPolicy(_, args, ctx, info) {
      const POLICY_NAME = 'devgear-notifications';
      console.log(ctx);
      const principal = ctx.event.requestContext.identity.cognitoIdentityId;
      console.log(principal);
      console.log(ctx.event.requestContext);
      console.log(ctx.event);
      const { cognitoIdentityId } = args;
      return !!attachPrincipalPolicy(POLICY_NAME, cognitoIdentityId)
    }
  },
  Query    : {
    user(_, args, ctx, info) {
      return ctx.db.query.user({ where : { id : args.id } }, info)
    },
    me(_, args, ctx, info) {
      return ctx.db.query.user({ where : { id : ctx.user.id } }, info)
    }
  }
};

module.exports = resolvers;